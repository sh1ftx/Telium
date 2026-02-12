#!/bin/bash

BASE_URL="http://localhost:8800"
PASS=0
FAIL=0
CRITICAL=()

echo "======================================="
echo "🚀 INICIANDO TESTES DA API"
echo "======================================="

function check_status() {
  if [ "$1" -eq 200 ] || [ "$1" -eq 201 ]; then
    echo "✅ OK (HTTP $1)"
    ((PASS++))
  else
    echo "❌ FAIL (HTTP $1)"
    ((FAIL++))
    CRITICAL+=("$2")
  fi
}

echo ""
echo "🔎 Teste 1: Health Check"
STATUS=$(curl -s -o response.json -w "%{http_code}" $BASE_URL/)
check_status $STATUS "Health Check falhou"

echo ""
echo "👤 Teste 2: Criar usuário"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X POST $BASE_URL/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste User","email":"teste@email.com","fone":"999999999","data_nascimento":"2000-01-01"}')
check_status $STATUS "Falha ao criar usuário"

echo ""
echo "📋 Teste 3: Listar usuários"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  $BASE_URL/users)
check_status $STATUS "Falha ao listar usuários"

USER_ID=$(jq '.[0].id' response.json 2>/dev/null)

echo ""
echo "✏ Teste 4: Atualizar usuário"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X PUT $BASE_URL/users/$USER_ID \
  -H "Content-Type: application/json" \
  -d '{"nome":"User Atualizado","email":"novo@email.com","fone":"88888888","data_nascimento":"1999-01-01"}')
check_status $STATUS "Falha ao atualizar usuário"

echo ""
echo "📝 Teste 5: Criar tarefa"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X POST $BASE_URL/tarefas \
  -H "Content-Type: application/json" \
  -d "{\"titulo\":\"Tarefa Teste\",\"descricao\":\"Descricao\",\"status\":\"pendente\",\"usuario_id\":$USER_ID}")
check_status $STATUS "Falha ao criar tarefa"

echo ""
echo "📋 Teste 6: Listar tarefas"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  $BASE_URL/tarefas)
check_status $STATUS "Falha ao listar tarefas"

TASK_ID=$(jq '.[0].id' response.json 2>/dev/null)

echo ""
echo "✏ Teste 7: Atualizar tarefa"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X PUT $BASE_URL/tarefas/$TASK_ID \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Tarefa Atualizada","descricao":"Nova descricao","status":"concluida"}')
check_status $STATUS "Falha ao atualizar tarefa"

echo ""
echo "🗑 Teste 8: Deletar tarefa"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X DELETE $BASE_URL/tarefas/$TASK_ID)
check_status $STATUS "Falha ao deletar tarefa"

echo ""
echo "🗑 Teste 9: Deletar usuário"
STATUS=$(curl -s -o response.json -w "%{http_code}" \
  -X DELETE $BASE_URL/users/$USER_ID)
check_status $STATUS "Falha ao deletar usuário"

echo ""
echo "======================================="
echo "📊 RESUMO FINAL"
echo "======================================="
echo "✔ Sucessos: $PASS"
echo "❌ Falhas:   $FAIL"

if [ "$FAIL" -eq 0 ]; then
  echo ""
  echo "🎉 API FUNCIONANDO PERFEITAMENTE!"
else
  echo ""
  echo "⚠️ Pontos críticos encontrados:"
  for issue in "${CRITICAL[@]}"; do
    echo "- $issue"
  done
fi

echo "======================================="
