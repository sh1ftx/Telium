// Importa o framework Express.
// Ele será usado para criar um objeto Router,
// responsável por organizar as rotas relacionadas a "tarefas".
import express from "express";

// Importa os controladores responsáveis pela lógica de negócio.
// Cada função lida com uma operação específica no recurso "tarefas".
import {
  getTarefas,
  addTarefa,
  updateTarefa,
  deleteTarefa
} from "../controller/tarefas.js";

// Cria uma instância de Router.
// O Router permite modularizar as rotas,
// separando responsabilidades e evitando concentrar tudo no app principal.
const router = express.Router();

/**
 * Define uma rota HTTP GET na raiz deste módulo.
 * 
 * Quando o cliente fizer:
 * GET /tarefas
 * 
 * O Express executará a função getTarefas,
 * que buscará os dados no banco e retornará a resposta.
 */
router.get("/", getTarefas);

/**
 * Define uma rota HTTP POST na raiz deste módulo.
 * 
 * Quando o cliente fizer:
 * POST /tarefas
 * 
 * O corpo da requisição (req.body) deve conter os dados da nova tarefa.
 * A função addTarefa será responsável por validar e inserir no banco.
 */
router.post("/", addTarefa);

/**
 * Define uma rota HTTP PUT com parâmetro dinâmico ":id".
 * 
 * Exemplo de requisição:
 * PUT /tarefas/5
 * 
 * O valor "5" será acessível via req.params.id.
 * A função updateTarefa atualizará o registro correspondente no banco.
 */
router.put("/:id", updateTarefa);

/**
 * Define uma rota HTTP DELETE com parâmetro dinâmico ":id".
 * 
 * Exemplo:
 * DELETE /tarefas/5
 * 
 * O ID será obtido via req.params.id,
 * e a função deleteTarefa removerá o registro do banco.
 */
router.delete("/:id", deleteTarefa);

// Exporta o router para que ele possa ser utilizado
// no arquivo principal da aplicação (ex: app.js ou server.js)
// geralmente com algo como:
// app.use("/tarefas", router);
export default router;
