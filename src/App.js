import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  useEffect(() => {
    // Teste para verificar se as CSS vars estão acessíveis
    //getPropertyValue('--accent-cyan').trim() para remover espaços extras
    const cyan = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-cyan")
      .trim();
    console.log("--accent-cyan:", cyan);
  }, []);
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Dashboard CMV
        </p>
      </div>
    </>
  );
}

export default App;
