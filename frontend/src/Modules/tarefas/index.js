import React, { useEffect, useState, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getTarefas } from "../../services/tarefasService";
import { getUsers } from "../../services/usersService";


import Form from "./components/Form";
import Grid from "./components/Grid";
import { Container, Content, Title } from "./Styles";

function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // 🔹 Carregar tarefas
  const loadTarefas = useCallback(async () => {
    try {
      const res = await getTarefas();
      setTarefas(res);
    } catch (error) {
      toast.error("Erro ao carregar tarefas");
    }
  }, []);

  // 🔹 Carregar usuários
  const loadUsers = useCallback(async () => {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (error) {
      toast.error("Erro ao carregar usuários");
    }
  }, []);

  useEffect(() => {
    loadTarefas();
    loadUsers();
  }, [loadTarefas, loadUsers]);

  return (
    <Container>
      <Content>
        <Title>Tarefas</Title>

        <Form
          users={users}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          loadTarefas={loadTarefas}
        />

        <Grid
          tarefas={tarefas}
          setOnEdit={setOnEdit}
          loadTarefas={loadTarefas}
        />
      </Content>

      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        theme="colored"
      />
    </Container>
  );
}

export default Tarefas;
