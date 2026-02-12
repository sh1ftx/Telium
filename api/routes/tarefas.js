import express from "express";
import {
  getTarefas,
  addTarefa,
  updateTarefa,
  deleteTarefa
} from "../controller/tarefas.js";

const router = express.Router();

// 📋 Listar todas as tarefas
router.get("/", getTarefas);

// ➕ Criar nova tarefa
router.post("/", addTarefa);

// ✏ Atualizar tarefa
router.put("/:id", updateTarefa);

// 🗑 Deletar tarefa
router.delete("/:id", deleteTarefa);

export default router;
