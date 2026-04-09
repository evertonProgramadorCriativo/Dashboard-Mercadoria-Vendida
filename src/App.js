import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import { mockCmv, mockGroups, mockProducts } from "./mocks/dashboardMocks";
function App() {
  useEffect(() => {
    console.table("MockGroups: " + mockGroups.length + " grupos", mockGroups);
    console.table(
      "MockProducts: " + mockProducts.length + " produtos",
      mockProducts,
    );
    console.table("MockCmv: " + mockCmv.labels.length + " meses", mockCmv);
  }, [mockCmv, mockGroups, mockProducts]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainLayout />
    </>
  );
}

export default App;
