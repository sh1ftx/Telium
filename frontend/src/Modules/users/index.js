import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUsers } from "../../services/usersService";

import Form from "./components/Form";
import Grid from "./components/Grid";
import { Container, Content, Title } from "./Styles";

function Users() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res);
    } catch (error) {
      toast.error("Erro ao carregar usuários");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <Content>
        <Title>USUÁRIOS</Title>

        <Form
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          loadUsers={loadUsers}
        />

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Grid
            users={users}
            setUsers={setUsers}
            setOnEdit={setOnEdit}
            loadUsers={loadUsers}
          />
        )}

        <ToastContainer autoClose={3000} />
      </Content>
    </Container>
  );
}

export default Users;
