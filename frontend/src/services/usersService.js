import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800",
});

// 🔎 LISTAR USUÁRIOS
export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

// ➕ CRIAR USUÁRIO
export const createUser = async (user) => {
  const res = await api.post("/users", user);
  return res.data;
};

// ✏ ATUALIZAR USUÁRIO
export const updateUser = async (id, user) => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
};

// 🗑 DELETAR USUÁRIO
export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};
