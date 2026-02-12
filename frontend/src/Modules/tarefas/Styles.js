import styled from "styled-components";

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
    #f0f9ff 100%
  );

  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 60px;
  border-radius: 32px;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);

  box-shadow: 
    0 25px 60px rgba(120, 200, 190, 0.18),
    0 10px 30px rgba(79, 172, 254, 0.08);

  display: flex;
  flex-direction: column;
  gap: 40px;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 35px;
    border-radius: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1.2px;

  background: linear-gradient(
    90deg,
    #5fa8a6,
    #7fd8d2
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    margin: 16px auto 0;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      #8fd3c8,
      #bfeee8
    );

    opacity: 0.8;
  }
`;
