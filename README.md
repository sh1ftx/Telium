# Telium: Sistema de Gestão de Tarefas (Task Manager)

## Documentação técnica acadêmica orientada por normas de engenharia de software

Projeto desenvolvido para **fins didáticos e avaliativos** na disciplina Tópicos Especiais em Programação | Instituição: IFPI – Campus Pedro II

Curso: Análise e Desenvolvimento de Sistemas (ADS)

Docente responsável: Anderson dos Reis Barros

## 👥 Equipe e Atribuições

- Fernando da Silva Sena
- Gleison de Oliveira Sousa
- Kayky Rodrigues Silva
- Kayki Ivan de Sousa Pereira
- Vinycius Huellyson de Sousa Alves

---

## 1. Contexto acadêmico e propósito
Este sistema foi concebido como um Instrumento Mínimo Viável (MVP) para consolidar os conceitos de arquitetura cliente-servidor e desenvolvimento web moderno. 

Seguindo a norma ISO/IEC/IEEE 12207, o projeto foca na aplicação prática de:

- Integração Full Stack completa; 
- Persistência real em sistemas gerenciadores de banco de dados (SGBD); 
- Desenvolvimento de APIs RESTful estruturadas. 

## 2. Escopo do sistema
O escopo do Telium contempla a gestão bi-entitária (Usuários e Tarefas), permitindo:

- Exercitar operações CRUD completas; 
- Implementar integridade referencial entre as tabelas; 
- Aplicar validações de dados tanto no cliente quanto no servidor. 

Segundo o IEEE 830, a clareza nos requisitos é fundamental para a verificabilidade do software, o que é demonstrado pela separação clara entre as responsabilidades do frontend e backend. 

---

## 3. Fundamentação normativa adotada
### 3.1 IEEE 830 – Especificação de Requisitos de Software
Justifica a adoção de formulários estruturados para cadastro e edição, garantindo que os dados sejam verificáveis antes da persistência. 

---

### 3.2 IEEE 1016 – Descrição de Design de Software
Orienta a organização modular do projeto em diretórios distintos para controllers, rotas e serviços, facilitando a manutenibilidade. 

---

### 3.3 ISO/IEC 25010 – Qualidade de Produto de Software
Foca na Usabilidade (feedback visual com Toastify) e Adequação Funcional (persistência real dos registros). 

--- 

## 4. Arquitetura do sistema
O sistema adota o padrão Client-Server Full Stack:

- Backend (API REST): Desenvolvido em Node.js com Express, responsável pela lógica de negócio e segurança dos dados. 
- Frontend (SPA): Desenvolvido em React, responsável pela interface interativa e consumo dos serviços via Axios. 
- Banco de Dados: MySQL para persistência relacional, garantindo a integridade dos dados através de chaves estrangeiras.

---

## 5. Requisitos funcionais (IEEE 830)
### RF-01 — Gestão de Usuários
O sistema permite criar, listar, editar e remover usuários (Nome, Email, Telefone).

--- 

### RF-02 — Gestão de Tarefas
O sistema permite o gerenciamento de tarefas associadas a usuários específicos. 

--- 

### RF-03 — Validação de Dados
O sistema implementa trava para caracteres não numéricos no campo de telefone e validação sintática de e-mail. 

---

6. Organização do projeto
```
├── api/                # Servidor Backend (Node.js + Express)
│   ├── controller/     # Lógica de manipulação de dados
│   ├── routes/         # Definição dos endpoints REST
│   ├── db.js           # Configuração da conexão MySQL
│   └── index.js        # Ponto de entrada da API
├── frontend/           # Aplicação Frontend (React)
│   ├── src/
│   │   ├── Modules/    # Componentes principais (Users/Tasks)
│   │   ├── services/   # Consumo da API com Axios
│   │   └── styles/     # Estilização Global e Styled Components
└── README.md
```
