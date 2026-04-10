import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

function App() {
  useEffect(() => {
    //console.log("chart.js versão:", ChartJS.version);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainLayout />
    </>
  );
}

export default App;
