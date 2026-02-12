import styled from "styled-components";

/* =========================
   CONTAINER
========================= */

export const Container = styled.div`
  min-height: 100vh;
  padding: 90px 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: linear-gradient(
    135deg,
    #f4fbfb 0%,
    #eef9f8 50%,
    #f7fdfc 100%
  );
`;

/* =========================
   CONTENT (CARD)
========================= */

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 45px;
  border-radius: 28px;

  background: #ffffff;
  box-shadow: 0 15px 40px rgba(120, 200, 190, 0.15);

  display: flex;
  flex-direction: column;
  gap: 35px;
`;

/* =========================
   TITLE
========================= */

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.5px;

  color: #4c8f8c;

  margin-bottom: 5px;
`;
