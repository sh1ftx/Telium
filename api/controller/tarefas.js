import { db } from "../db.js";

/**
 * 🔎 Listar todas as tarefas com nome do usuário
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

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao buscar tarefas" });
    }

    return res.status(200).json(data);
  });
};

/**
 * ➕ Criar nova tarefa
 */
export const addTarefa = (req, res) => {
  const { titulo, descricao, status, usuario_id } = req.body;

  if (!titulo || !usuario_id) {
    return res.status(400).json("Título e usuário são obrigatórios");
  }

  const q = `
    INSERT INTO tarefas (titulo, descricao, status, usuario_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    q,
    [titulo, descricao || null, status || "pendente", usuario_id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao criar tarefa" });
      }

      return res.status(201).json("Tarefa criada com sucesso");
    }
  );
};

/**
 * ✏ Atualizar tarefa
 */
export const updateTarefa = (req, res) => {
  const { titulo, descricao, status } = req.body;

  const q = `
    UPDATE tarefas
    SET titulo = ?, descricao = ?, status = ?
    WHERE id = ?
  `;

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
 * 🗑 Deletar tarefa
 */
export const deleteTarefa = (req, res) => {
  const q = "DELETE FROM tarefas WHERE id = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao deletar tarefa" });
    }

    return res.status(200).json("Tarefa removida com sucesso");
  });
};
