// Importa o framework Express.
// Ele fornece o método Router para organizar rotas em módulos separados.
import express from "express";

// Importa as funções controladoras responsáveis
// pelas operações relacionadas ao recurso "usuarios".
// Cada função contém a lógica que interage com o banco de dados.
import { getUsers, addUser, updateUser, deleteUser } from "../controller/users.js";

// Cria uma instância de Router.
// Esse objeto permite definir rotas agrupadas,
// que depois serão conectadas ao app principal.
const router = express.Router();

/**
 * Rota HTTP GET
 * 
 * Quando o cliente fizer:
 * GET /users
 * 
 * A função getUsers será executada,
 * retornando todos os registros da tabela "usuarios".
 */
router.get("/", getUsers);

/**
 * Rota HTTP POST
 * 
 * Quando o cliente fizer:
 * POST /users
 * 
 * O corpo da requisição (req.body) deve conter
 * os dados necessários para criar um novo usuário.
 * A função addUser realizará a inserção no banco.
 */
router.post("/", addUser);

/**
 * Rota HTTP PUT com parâmetro dinâmico ":id".
 * 
 * Exemplo:
 * PUT /users/3
 * 
 * O valor "3" será acessível via req.params.id.
 * A função updateUser atualizará o usuário correspondente.
 */
router.put("/:id", updateUser);

/**
 * Rota HTTP DELETE com parâmetro dinâmico ":id".
 * 
 * Exemplo:
 * DELETE /users/3
 * 
 * O ID será obtido via req.params.id,
 * e a função deleteUser removerá o registro do banco.
 */
router.delete("/:id", deleteUser);

// Exporta o router para ser utilizado no arquivo principal da aplicação,
// geralmente com algo como:
// app.use("/users", router);
export default router;
