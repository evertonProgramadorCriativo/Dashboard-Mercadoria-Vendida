import React, { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("testando configurações iniciais front end");
  }, []);
  return (
    <div
      style={{
        background: "#080c18",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "#00f5c4", fontFamily: "monospace" }}>Dashboard CMV</p>
    </div>
  );
}

export default App;
