import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100vw;
  height: 100vh;
  
  position: fixed; 
  top: 0;
  left: 0;
  
  background: linear-gradient(135deg, #1a1c1d 0%, #2c3e3e 100%);
  margin: 0;
  padding: 0;
  z-index: 9999; 
`;

export const LoginCard = styled.form`
  background-color: #242627;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #333;

  label {
    color: #ffffff; 
    font-size: 14px;
    margin-bottom: -6px; 
    opacity: 0.9; 
  }

  h2 {
    color: #81e6d9;
    text-align: center;
    font-size: 26px;
  }

  input {
    padding: 14px;
    background-color: #1a1c1d;
    border: 1px solid #3e4444;
    border-radius: 8px;
    color: #e2e8f0;
    outline: none;
    
    &:focus {
      border-color: #81e6d9;
    }
  }

  button {
    padding: 14px;
    background-color: #81e6d9;
    color: #1a1c1d;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
`;