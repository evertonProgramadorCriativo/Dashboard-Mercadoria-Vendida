import React, { useEffect } from "react";
import styled from "styled-components";

// CMVChart — estrutura base: card com header e área do gráfico vazia
const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  position: relative;
  width: 100%;

  /* linha colorida no topo do card */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: var(--radius) var(--radius) 0 0;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
  }
`;
// CardHeader: título do card com label e título principal, estilizados para destacar a informação de que se trata do gráfico de CMV
const CardHeader = styled.div`
  margin-bottom: 1.5rem;

  .label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--accent-cyan);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.3rem;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
`;
// Área do gráfico: placeholder estilizado, com borda pontilhada e texto indicando onde o gráfico será renderizado no futuro
const ChartArea = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
`;

// CMVChart: componente funcional que representa o gráfico de Custo de Mercadoria Vendida, com estrutura base para ser preenchida posteriormente com a implementação do gráfico usando Chart.js ou outra biblioteca de gráficos. O useEffect é usado para confirmar que o componente foi montado corretamente, e a área do gráfico atualmente exibe um placeholder indicando onde o gráfico será renderizado no futuro.
function CMVChart() {
  useEffect(() => {
    console.log("CMVChart montado — estrutura base OK");
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="label">cmv chart</div>
      </CardHeader>

      <ChartArea>gráfico será renderizado aqui</ChartArea>
    </Card>
  );
}

export default CMVChart;
