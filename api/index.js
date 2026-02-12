// Importa o framework Express.
// Ele é responsável por criar o servidor HTTP
// e gerenciar rotas, middlewares e requisições.
import express from "express";

// Importa o middleware CORS.
// CORS (Cross-Origin Resource Sharing) é um mecanismo
// que permite controlar quais origens (domínio, protocolo e porta)
// podem acessar os recursos da sua API via navegador.
import cors from "cors";

// Importa os módulos de rotas.
// Cada arquivo contém um conjunto de rotas organizadas por recurso.
import userRoutes from "./routes/users.js";
import tarefasRoutes from "./routes/tarefas.js";

// Cria a instância principal da aplicação Express.
// "app" será o objeto central que gerencia toda a API.
const app = express();

// Define a porta onde o servidor irá escutar requisições HTTP.
const PORT = 8800;

/**
 * =========================
 * Middlewares Globais
 * =========================
 */

// Habilita CORS para todas as rotas.
// Por padrão, permite requisições de qualquer origem.
// Em produção, é recomendável restringir as origens permitidas.
app.use(cors());

// Middleware responsável por interpretar
// requisições com corpo em formato JSON.
// Ele popula automaticamente req.body.
app.use(express.json());

/**
 * =========================
 * Registro das Rotas
 * =========================
 */

// Associa o módulo de rotas de usuários ao prefixo "/users".
// Exemplo:
// GET /users
// POST /users
// PUT /users/:id
// DELETE /users/:id
app.use("/users", userRoutes);

// Associa o módulo de rotas de tarefas ao prefixo "/tarefas".
// Exemplo:
// GET /tarefas
// POST /tarefas
// PUT /tarefas/:id
// DELETE /tarefas/:id
app.use("/tarefas", tarefasRoutes);

/**
 * =========================
 * Rota de Health Check
 * =========================
 */

// Endpoint simples para verificar se a API está ativa.
// Muito usado para monitoramento e testes rápidos.
app.get("/", (req, res) => {
  res.status(200).json({ status: "API rodando" });
});

/**
 * =========================
 * Inicialização do Servidor
 * =========================
 */

// Inicia o servidor HTTP e faz com que ele passe
// a escutar requisições na porta definida.
// O callback é executado quando o servidor sobe com sucesso.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
