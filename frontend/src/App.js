import React from "react";
import Global from "./styles/global";

import Users from "./Modules/users";
import Tarefas from "./Modules/tarefas";

function App() {
  return (
    <>
      <Global />

      <div style={styles.appContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}> Telium - Task Manager </h1>
          {/* <p style={styles.subtitle}>Controle de Usuários e Tarefas</p> */}
        </header>

        <main style={styles.main}>
          <section style={styles.section}>
            <Users />
          </section>

          <section style={styles.section}>
            <Tarefas />
          </section>
        </main>

        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} - Telium </p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(135deg, #f4fbfb, #eef9f8)",
  },

  header: {
    background: "linear-gradient(135deg, #bfeee8, #d6f7f3)",
    color: "#2f6f6c",
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(120, 200, 190, 0.25)",
  },

  title: {
    margin: 0,
    fontSize: "34px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    color: "#2f6f6c",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#4c8f8c",
  },

  main: {
    flex: 1,
    padding: "50px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },

  section: {
    marginBottom: "60px",
    background: "#ffffff",
    padding: "35px",
    borderRadius: "24px",
    boxShadow: "0 12px 30px rgba(120, 200, 190, 0.15)",
  },

  footer: {
    background: "linear-gradient(135deg, #bfeee8, #d6f7f3)",
    color: "#2f6f6c",
    textAlign: "center",
    padding: "18px",
    fontSize: "14px",
    boxShadow: "0 -4px 15px rgba(120, 200, 190, 0.15)",
  },
};

// ✅ Export default adicionado
export default App;
