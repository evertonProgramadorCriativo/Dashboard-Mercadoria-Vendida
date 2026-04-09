import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import { mockCmv, mockGroups, mockProducts } from "./mocks/dashboardMocks";
import { Chart as ChartJS } from "chart.js";

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
