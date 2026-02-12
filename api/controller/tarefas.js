// Importa a instância de conexão com o banco de dados.
// "db" provavelmente é um objeto configurado com mysql2 ou mysql
// que expõe o método query para executar comandos SQL.
import { db } from "../db.js";

/**
 * Controlador responsável por listar todas as tarefas.
 * 
 * A função ignora o parâmetro "req" (por isso o "_"),
 * e utiliza apenas o objeto "res" para enviar a resposta HTTP.
 * 
 * Ela executa uma consulta SQL que:
 * - Seleciona campos da tabela "tarefas"
 * - Faz um JOIN com a tabela "usuarios" para obter o nome do usuário
 * - Ordena os resultados pelo id da tarefa em ordem decrescente
 */
export const getTarefas = (_, res) => {
  const q = `
    SELECT 
      tarefas.id,
      tarefas.titulo,
      tarefas.descricao,
      tarefas.status,
      tarefas.usuario_id,
      usuarios.nome AS usuario_nome
    FROM tarefas
    JOIN usuarios ON tarefas.usuario_id = usuarios.id
    ORDER BY tarefas.id DESC
  `;

  // Executa a query no banco de dados.
  // "err" contém erro, se houver.
  // "data" contém os registros retornados pela consulta.
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      // Retorna status HTTP 500 (erro interno do servidor)
      // junto com uma mensagem de erro em formato JSON.
      return res.status(500).json({ error: "Erro ao buscar tarefas" });
    }

    // Retorna status HTTP 200 (sucesso)
    // enviando os dados obtidos do banco em formato JSON.
    return res.status(200).json(data);
  });
};

/**
 * Controlador responsável por criar uma nova tarefa.
 * 
 * Extrai os dados do corpo da requisição (req.body),
 * que deve estar em formato JSON (necessário usar express.json()).
 */
export const addTarefa = (req, res) => {
  const { titulo, descricao, status, usuario_id } = req.body;

  // Validação básica:
  // "titulo" e "usuario_id" são obrigatórios.
  // Se não forem fornecidos, retorna erro 400 (requisição inválida).
  if (!titulo || !usuario_id) {
    return res.status(400).json("Título e usuário são obrigatórios");
  }

  const q = `
    INSERT INTO tarefas (titulo, descricao, status, usuario_id)
    VALUES (?, ?, ?, ?)
  `;

  // Executa a inserção usando placeholders "?"
  // Isso previne SQL Injection, pois os valores são tratados
  // como parâmetros e não como parte da string SQL.
  db.query(
    q,
    [titulo, descricao || null, status || "pendente", usuario_id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao criar tarefa" });
      }

      // Retorna 201 (Created), indicando que o recurso foi criado.
      return res.status(201).json("Tarefa criada com sucesso");
    }
  );
};

/**
 * Controlador responsável por atualizar uma tarefa existente.
 * 
 * O ID da tarefa é obtido a partir dos parâmetros da rota (req.params.id).
 * Os novos dados vêm do corpo da requisição (req.body).
 */
export const updateTarefa = (req, res) => {
  const { titulo, descricao, status } = req.body;

  const q = `
    UPDATE tarefas
    SET titulo = ?, descricao = ?, status = ?
    WHERE id = ?
  `;

  // Executa a atualização passando os valores como parâmetros.
  // req.params.id é definido na rota, por exemplo: /tarefas/:id
  db.query(
    q,
    [titulo, descricao, status, req.params.id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao atualizar tarefa" });
      }

      return res.status(200).json("Tarefa atualizada com sucesso");
    }
  );
};

/**
 * Controlador responsável por remover uma tarefa do banco.
 * 
 * O ID da tarefa é obtido a partir dos parâmetros da rota (req.params.id).
 */
export const deleteTarefa = (req, res) => {
  const q = "DELETE FROM tarefas WHERE id = ?";

  // Executa a exclusão usando o ID recebido na URL.
  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao deletar tarefa" });
    }

    return res.status(200).json("Tarefa removida com sucesso");
  });
};
