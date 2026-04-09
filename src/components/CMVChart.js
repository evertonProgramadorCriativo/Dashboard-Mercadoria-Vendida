import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { mockCmv } from "../mocks/dashboardMocks";

// Registra todos os módulos necessários para Bar + Line no mesmo gráfico
//Grafico  sendo testado no console.log para confirmar que o chart.js está funcionando e que o componente foi montado corretamente, com os módulos necessários registrados. O gráfico em si ainda não foi implementado, mas a estrutura base está pronta para receber os dados e opções de configuração posteriormente.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

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
const ChartWrap = styled.div`
  height: 300px;
  position: relative;
`;

// Dataset e labels vazios  - testando no console.log para confirmar que o chart.js está funcionando e que o componente foi montado corretamente, com os módulos necessários registrados. O gráfico em si ainda não foi implementado, mas a estrutura base está pronta para receber os dados e opções de configuração posteriormente.
const emptyData = {
  labels: [],
  datasets: [],
};
// Opções básicas para o gráfico, com responsividade e manutenção da proporção, mas sem configurações específicas de eixos, legendas ou tooltips, já que o gráfico ainda não foi implementado.
const options = {
  responsive: true,
  maintainAspectRatio: false,
};

// CMVChart: componente funcional que representa o gráfico de Custo de Mercadoria Vendida, com estrutura base para ser preenchida posteriormente com a implementação do gráfico usando Chart.js ou outra biblioteca de gráficos. O useEffect é usado para confirmar que o componente foi montado corretamente, e a área do gráfico atualmente exibe um placeholder indicando onde o gráfico será renderizado no futuro.
function CMVChart() {
  useEffect(() => {
    // console.log("CMVChart montado — estrutura base OK");
    /**  console.log("Módulos:", [
      "CategoryScale",
      "LinearScale",
      "BarElement",
      "LineElement",
      "PointElement",
      "Tooltip",
      "Legend",
    ]);*/
    console.log("CMVChart — labels carregados do mock:", mockCmv.labels);
    console.log("Custos (12 meses):", mockCmv.custos);
    console.log(
      "Maior custo: R$",
      Math.max(...mockCmv.custos).toLocaleString("pt-BR"),
    );
  }, []);

  //  Dados do gráfico, utilizando os valores de labels e custos do mockCmv para criar um dataset do tipo "bar" com as barras vermelhas representando o custo (CMV) para cada mês. O backgroundColor é definido como um vermelho semi-transparente, e as bordas das barras têm um raio de 4 para suavizar as extremidades.
  const chartData = {
    labels: mockCmv.labels,
    datasets: [
      {
        type: "bar",
        label: "Custo (CMV)",
        data: mockCmv.custos,
        backgroundColor: "rgba(239,68,68,0.75)",
        borderRadius: 4,
      },
    ],
  };
  // Opções do gráfico, com customização de cores, fontes e formatação dos ticks para exibir os valores em milhares de reais (R$), além de manter a responsividade e a proporção do gráfico.
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#8892a4", font: { family: "Space Mono", size: 11 } },
      },
    },
    scales: {
      x: { ticks: { color: "#8892a4" }, grid: { color: "#1e2d4a" } },
      y: {
        ticks: {
          color: "#8892a4",
          callback: (v) => `R$${(v / 1000).toFixed(0)}k`,
        },
        grid: { color: "#1e2d4a" },
      },
    },
  };
  return (
    <Card>
      <CardHeader>
        <div className="label">cmv chart</div>
      </CardHeader>

      <ChartWrap>
        {" "}
        {/* Adicionando Dados ao Gráfico  apenas tabelas Vermelhas */}
        <Bar data={chartData} options={options} />
      </ChartWrap>
    </Card>
  );
}

export default CMVChart;
