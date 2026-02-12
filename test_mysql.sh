#!/bin/bash

MYSQL_USER="root"
MYSQL_PASSWORD="@kayki123"
MYSQL_DB="crud"

echo "=============================="
echo " RESETANDO BANCO DE DADOS "
echo "=============================="
echo

mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" <<EOF

USE $MYSQL_DB;

-- ⚠️ Apagar tabelas (ordem importa por causa da FK)
DROP TABLE IF EXISTS tarefas;
DROP TABLE IF EXISTS usuarios;

-- 👤 Criar tabela de usuários
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  fone VARCHAR(20),
  data_nascimento DATE
);

-- ✅ Criar tabela de tarefas
CREATE TABLE tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  status ENUM('pendente', 'em andamento', 'concluída') DEFAULT 'pendente',
  usuario_id INT NOT NULL,
  CONSTRAINT fk_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id)
    ON DELETE CASCADE
);

-- 🔍 Mostrar resultado final
SHOW TABLES;
DESCRIBE usuarios;
DESCRIBE tarefas;

EOF

echo
echo "=============================="
echo " BANCO RESETADO COM SUCESSO "
echo "=============================="
