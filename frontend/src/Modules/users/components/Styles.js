import styled from "styled-components";

/* =========================
   FORM
========================= */

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  padding: 28px;
  margin-bottom: 35px;

  border-radius: 24px;

  background: linear-gradient(
    135deg,
    #f4fbfb,
    #eef9f8
  );

  box-shadow: 0 10px 30px rgba(120, 200, 190, 0.18);
`;

/* =========================
   INPUT AREA
========================= */

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 220px;
`;

/* =========================
   LABEL
========================= */

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #5fa8a6;
`;

/* =========================
   INPUT
========================= */

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 16px;
  border: 1.5px solid #cfeeee;

  background: #ffffff;
  font-size: 14px;
  color: #4c8f8c;

  transition: all 0.25s ease;

  &:focus {
    border-color: #8fd3c8;
    box-shadow: 0 0 0 4px rgba(143, 211, 200, 0.25);
    outline: none;
  }
`;

/* =========================
   BOTÃO PRINCIPAL
========================= */

export const Button = styled.button`
  align-self: flex-end;

  padding: 12px 26px;
  border-radius: 20px;
  border: none;

  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;

  color: #2f6f6c;

  background: linear-gradient(
    135deg,
    #bfeee8,
    #d6f7f3
  );

  cursor: pointer;
  transition: all 0.25s ease;

  box-shadow: 0 8px 22px rgba(143, 211, 200, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(143, 211, 200, 0.45);

    background: linear-gradient(
      135deg,
      #aee6df,
      #c8f3ee
    );
  }

  &:active {
    transform: scale(0.97);
  }
`;

/* =========================
   TABLE
========================= */

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  border-radius: 24px;
  overflow: hidden;

  background: #ffffff;
  box-shadow: 0 10px 30px rgba(120, 200, 190, 0.18);
`;

export const Thead = styled.thead`
  background: linear-gradient(
    90deg,
    #c9f3ee,
    #d7f9f5
  );
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #e6f6f5;
  transition: all 0.25s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      #f4fbfb,
      #eef9f8
    );
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 16px 22px;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #4c8f8c;
`;

export const Td = styled.td`
  padding: 16px 22px;
  font-size: 14px;
  color: #5fa8a6;
`;

/* =========================
   AÇÕES (Editar / Excluir)
========================= */

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 6px 14px;
  border-radius: 14px;
  border: none;

  font-size: 13px;
  font-weight: 500;

  background: #e3f6ff;
  color: #4a90a4;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #d2f0ff;
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(150, 210, 230, 0.4);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 14px;
  border-radius: 14px;
  border: none;

  font-size: 13px;
  font-weight: 500;

  background: #fde7ec;
  color: #b86b77;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9d3dc;
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(240, 170, 180, 0.35);
  }

  &:active {
    transform: scale(0.96);
  }
`;
