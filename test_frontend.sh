#!/bin/bash

FRONTEND_PORT=3000
BACKEND_PORT=8800
FRONTEND_URL="http://localhost:$FRONTEND_PORT"
BACKEND_URL="http://localhost:$BACKEND_PORT"

PASS=0
FAIL=0
CRITICAL=()

echo "======================================="
echo "🧪 TESTE COMPLETO DO FRONTEND"
echo "======================================="

# Função para checar status HTTP
check_status() {
  if [ "$1" -eq 200 ]; then
    echo "✅ OK (HTTP $1)"
    ((PASS++))
  else
    echo "❌ FAIL (HTTP $1)"
    ((FAIL++))
    CRITICAL+=("$2")
  fi
}

echo ""
echo "🔎 1. Verificando se frontend está online..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $FRONTEND_URL)

if [ "$STATUS" == "000" ]; then
  echo "❌ Frontend não está rodando na porta $FRONTEND_PORT"
  echo "Execute: cd frontend && npm start"
  exit 1
fi

check_status $STATUS "Frontend não respondeu corretamente"

echo ""
echo "🔎 2. Verificando se backend está acessível..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL)

if [ "$STATUS" == "000" ]; then
  echo "❌ Backend não está rodando na porta $BACKEND_PORT"
  echo "Execute: cd api && npm start"
  exit 1
fi

check_status $STATUS "Backend não respondeu corretamente"

echo ""
echo "🔎 3. Testando endpoint /users via frontend..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL/users)
check_status $STATUS "Endpoint /users falhou"

echo ""
echo "🔎 4. Testando endpoint /tarefas via frontend..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL/tarefas)
check_status $STATUS "Endpoint /tarefas falhou"

echo ""
echo "🔎 5. Testando build do frontend..."

cd frontend || exit

npm run build > /dev/null 2>&1

if [ -d "build" ]; then
  echo "✅ Build gerado com sucesso"
  ((PASS++))
else
  echo "❌ Build falhou"
  ((FAIL++))
  CRITICAL+=("Build do frontend falhou")
fi

cd ..

echo ""
echo "======================================="
echo "📊 RESUMO FINAL FRONTEND"
echo "======================================="
echo "✔ Sucessos: $PASS"
echo "❌ Falhas:   $FAIL"

if [ "$FAIL" -eq 0 ]; then
  echo ""
  echo "🎉 FRONTEND FUNCIONANDO CORRETAMENTE!"
else
  echo ""
  echo "⚠️ Pontos críticos encontrados:"
  for issue in "${CRITICAL[@]}"; do
    echo "- $issue"
  done
fi

echo "======================================="
