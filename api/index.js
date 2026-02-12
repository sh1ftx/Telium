import express from "express";
import cors from "cors"; // Cross-Origin Resource Sharing: mecanismo de segurança
// do navegador que controla quais origens podem acessar recursos do seu backend.

import userRoutes from "./routes/users.js";
import tarefasRoutes from "./routes/tarefas.js";

const app = express();
const PORT = 8800;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/users", userRoutes);
app.use("/tarefas", tarefasRoutes);

// Health check (opcional, mas recomendado)
app.get("/", (req, res) => {
  res.status(200).json({ status: "API rodando" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
