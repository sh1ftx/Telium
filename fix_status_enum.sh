#!/bin/bash

DB_NAME="crud"          # ajuste se seu banco tiver outro nome
DB_USER="root"
DB_HOST="localhost"

echo "======================================="
echo "🔎 Verificando estrutura da tabela tarefas"
echo "======================================="

read -s -p "Digite a senha do MySQL: " DB_PASS
echo ""

echo ""
echo "📋 Estrutura atual da coluna status:"
mysql -u $DB_USER -p$DB_PASS -h $DB_HOST -e "DESCRIBE $DB_NAME.tarefas;" | grep status

echo ""
echo "======================================="
echo "🔧 Ajustando ENUM para padrão profissional"
echo "======================================="

mysql -u $DB_USER -p$DB_PASS -h $DB_HOST -e "
ALTER TABLE $DB_NAME.tarefas
MODIFY status ENUM('pendente','em_andamento','concluida') NOT NULL DEFAULT 'pendente';
"

if [ $? -eq 0 ]; then
  echo "✅ ENUM atualizado com sucesso."
else
  echo "❌ Erro ao atualizar ENUM."
  exit 1
fi

echo ""
echo "======================================="
echo "🧪 Testando inserções de status"
echo "======================================="

for status in pendente em_andamento concluida
do
  mysql -u $DB_USER -p$DB_PASS -h $DB_HOST -e "
  INSERT INTO $DB_NAME.tarefas (titulo, descricao, status, usuario_id)
  VALUES ('Teste_$status','Teste','$status',1);
  " 2>/dev/null

  if [ $? -eq 0 ]; then
    echo "✅ Status '$status' funciona."
  else
    echo "❌ Status '$status' falhou."
  fi
done

echo ""
echo "======================================="
echo "📊 RESUMO FINAL"
echo "======================================="
echo "✔ ENUM padronizado"
echo "✔ Status testados"
echo ""
echo "🎉 Banco ajustado com sucesso."
echo "======================================="
