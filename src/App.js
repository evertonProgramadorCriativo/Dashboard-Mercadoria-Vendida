import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainLayout />
    </>
  );
}

export default App;
