import React from "react";
import { deleteTarefa } from "../../../services/tarefasService";
import { toast } from "react-toastify";
import {
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Actions,
  EditButton,
  DeleteButton,
  StatusBadge
} from "./Styles";

const Grid = ({ tarefas, setOnEdit, loadTarefas }) => {

  const handleDelete = async (id) => {
    try {
      await deleteTarefa(id);
      toast.success("Tarefa deletada com sucesso!");
      loadTarefas();
    } catch {
      toast.error("Erro ao deletar tarefa");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Título</Th>
          <Th>Descrição</Th>
          <Th>Status</Th>
          <Th>Usuário</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>

      <Tbody>
        {tarefas.map((item) => (
          <Tr key={item.id}>
            <Td>{item.titulo}</Td>
            <Td>{item.descricao}</Td>

            {/* Status com badge estilizado */}
            <Td>
              <StatusBadge status={item.status}>
                {item.status}
              </StatusBadge>
            </Td>

            <Td>{item.usuario_nome}</Td>

            {/* Botões estilizados */}
            <Td>
              <Actions>
                <EditButton onClick={() => setOnEdit(item)}>
                  Editar
                </EditButton>

                <DeleteButton onClick={() => handleDelete(item.id)}>
                  Excluir
                </DeleteButton>
              </Actions>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
