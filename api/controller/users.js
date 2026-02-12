import { db } from "../db.js";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err);
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json(data); // pode ser []
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      return res.status(500).json({ error: err.message });
    }

    return res.status(201).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET nome = ?, email = ?, fone = ?, data_nascimento = ? WHERE id = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

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
