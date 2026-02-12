import React, { useState } from "react";
import * as C from "./StylesLogin_gradiante";

const Login = ({ setEstaLogado }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "1234") {
      setEstaLogado(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <C.LoginWrapper>
      <C.LoginCard onSubmit={handleSubmit}>
        <h2>TELIUM</h2>
        <label>Acesso ao Sistema</label>
        
        <input 
          type="text" 
          placeholder="Usuário" 
          onChange={(e) => setUser(e.target.value)} 
          required
        />
        
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setPass(e.target.value)} 
          required
        />
        
        <button type="submit">Entrar</button>
      </C.LoginCard>
    </C.LoginWrapper>
  );
};

export default Login;