import React, { useEffect, useRef } from "react";
// import { createUser, updateUser } from "../../../../services/usersService";
import { createUser, updateUser } from "../../../services/usersService";
import { toast } from "react-toastify";
import { FormContainer, InputArea, Label, Input, Button } from "./Styles";

const Form = ({ onEdit, setOnEdit, loadUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.email.value || !user.fone.value) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        await updateUser(onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
        });

        toast.success("Usuário atualizado com sucesso!");
      } else {
        await createUser({
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
        });

        toast.success("Usuário criado com sucesso!");
      }

      // Limpa os campos
      user.nome.value = "";
      user.email.value = "";
      user.fone.value = "";

      setOnEdit(null);
      loadUsers();
    } catch (error) {
      toast.error("Erro ao salvar usuário");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>

      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>

      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>

      <Button type="submit">
        {onEdit ? "ATUALIZAR" : "SALVAR"}
      </Button>
    </FormContainer>
  );
};

export default Form;
