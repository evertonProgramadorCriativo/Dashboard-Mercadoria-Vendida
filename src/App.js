import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
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
      <Header />
    </>
  );
}

export default App;
