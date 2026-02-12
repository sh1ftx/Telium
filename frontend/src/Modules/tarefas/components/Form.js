import React, { useEffect, useRef } from "react";
import { createTarefa, updateTarefa } from "../../../services/tarefasService";
import { toast } from "react-toastify";
import {
  FormContainer,
  InputArea,
  Label,
  Input,
  Select,
  Button,
} from "./Styles";

const Form = ({ users, onEdit, setOnEdit, loadTarefas }) => {
  const ref = useRef(null);

  /* =========================
     PREENCHE FORM EM EDIÇÃO
  ========================= */
  useEffect(() => {
    if (!onEdit || !ref.current) return;

    const form = ref.current;

    form.titulo.value = onEdit.titulo || "";
    form.descricao.value = onEdit.descricao || "";
    form.status.value = onEdit.status || "pendente";
    form.usuario_id.value = onEdit.usuario_id || "";
  }, [onEdit]);

  /* =========================
     RESET FORM
  ========================= */
  const resetForm = () => {
    if (!ref.current) return;

    const form = ref.current;

    form.titulo.value = "";
    form.descricao.value = "";
    form.status.value = "pendente";
    form.usuario_id.value = "";
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ref.current) return;

    const form = ref.current;

    if (!form.titulo.value.trim() || !form.usuario_id.value) {
      return toast.warn("Preencha os campos obrigatórios!");
    }

    const data = {
      titulo: form.titulo.value.trim(),
      descricao: form.descricao.value.trim(),
      status: form.status.value,
      usuario_id: Number(form.usuario_id.value),
    };

    try {
      if (onEdit) {
        await updateTarefa(onEdit.id, data);
        toast.success("Tarefa atualizada com sucesso!");
      } else {
        await createTarefa(data);
        toast.success("Tarefa criada com sucesso!");
      }

      resetForm();
      setOnEdit(null);
      loadTarefas();
    } catch (error) {
      toast.error("Erro ao salvar tarefa");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Título*</Label>
        <Input name="titulo" required />
      </InputArea>

      <InputArea>
        <Label>Descrição</Label>
        <Input name="descricao" />
      </InputArea>

      <InputArea>
        <Label>Status</Label>
        <Select name="status" defaultValue="pendente">
          <option value="pendente">Pendente</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </Select>
      </InputArea>

      <InputArea>
        <Label>Usuário*</Label>
        <Select name="usuario_id" required>
          <option value="">
            {users.length === 0
              ? "Nenhum usuário cadastrado"
              : "Selecione"}
          </option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.nome}
            </option>
          ))}
        </Select>
      </InputArea>

      <Button
        type="submit"
        disabled={users.length === 0}
      >
        {onEdit ? "ATUALIZAR" : "SALVAR"}
      </Button>
    </FormContainer>
  );
};

export default Form;
