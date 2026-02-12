import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800",
});

export const getTarefas = async () => {
  const res = await api.get("/tarefas");
  return res.data;
};

export const createTarefa = async (data) => {
  const res = await api.post("/tarefas", data);
  return res.data;
};

export const updateTarefa = async (id, data) => {
  const res = await api.put(`/tarefas/${id}`, data);
  return res.data;
};

export const deleteTarefa = async (id) => {
  const res = await api.delete(`/tarefas/${id}`);
  return res.data;
};
