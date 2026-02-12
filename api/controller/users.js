// Importa a conexão com o banco de dados.
// "db" é o objeto responsável por executar queries SQL.
import { db } from "../db.js";

/**
 * Controlador responsável por listar todos os usuários.
 * 
 * Executa uma consulta simples na tabela "usuarios"
 * retornando todos os registros.
 */
export const getUsers = (req, res) => {
  const q = "SELECT * FROM usuarios";

  // Executa a consulta no banco.
  // "data" será um array de objetos (mesmo que vazio).
  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err);
      // 500 = erro interno do servidor.
      return res.status(500).json({ error: err.message });
    }

    // 200 = sucesso.
    // Pode retornar [] se não houver usuários cadastrados.
    return res.status(200).json(data);
  });
};

/**
 * Controlador responsável por criar um novo usuário.
 * 
 * Os dados são recebidos via req.body (JSON enviado na requisição).
 * A query utiliza placeholder para evitar SQL Injection.
 */
export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";

  // Agrupa os valores na ordem correspondente às colunas do INSERT.
  // A estrutura VALUES (?) aceita um array interno com os valores.
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Executa a inserção passando os valores como parâmetro.
  db.query(q, [values], (err) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return res.status(500).json({ error: err.message });
    }

    // 201 = recurso criado com sucesso.
    return res.status(201).json("Usuário criado com sucesso.");
  });
};

/**
 * Controlador responsável por atualizar um usuário existente.
 * 
 * O ID do usuário vem de req.params.id (definido na rota, ex: /users/:id).
 * Os novos dados vêm do corpo da requisição (req.body).
 */
export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET nome = ?, email = ?, fone = ?, data_nascimento = ? WHERE id = ?";

  // Valores a serem atualizados.
  // A ordem deve corresponder à ordem dos placeholders na query.
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Spread operator (...) adiciona o ID ao final do array,
  // correspondendo ao último "?" da cláusula WHERE.
  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

/**
 * Controlador responsável por remover um usuário do banco.
 * 
 * O ID é recebido via parâmetro de rota (req.params.id).
 * A exclusão é feita utilizando placeholder para evitar injeção de SQL.
 */
export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE id = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error("Erro ao deletar usuário:", err);
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
