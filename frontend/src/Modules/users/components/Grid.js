import React from "react";
import { deleteUser } from "../../../services/usersService";
import { toast } from "react-toastify";
import {
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  EditButton,
  DeleteButton
} from "./Styles";

const Grid = ({ users, setOnEdit, loadUsers }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("Usuário deletado com sucesso!");
      loadUsers();
    } catch (error) {
      toast.error("Erro ao deletar usuário");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}>
            <Td>{item.nome}</Td>
            <Td>{item.email}</Td>
            <Td>{item.fone}</Td>

            <Td>
              <EditButton onClick={() => handleEdit(item)}>
                Editar
              </EditButton>
            </Td>

            <Td>
              <DeleteButton onClick={() => handleDelete(item.id)}>
                Excluir
              </DeleteButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
