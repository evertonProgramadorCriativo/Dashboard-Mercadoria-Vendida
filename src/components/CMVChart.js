import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { mockCmv } from "../mocks/dashboardMocks";

// Registra todos os módulos necessários para Bar + Line no mesmo gráfico
//Grafico  sendo testado no console.log para confirmar que o chart.js está funcionando e que o componente foi montado corretamente, com os módulos necessários registrados. O gráfico em si ainda não foi implementado, mas a estrutura base está pronta para receber os dados e opções de configuração posteriormente.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
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
    background: var(--accent-cyan);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 0.75rem;
    width: 106vw;
  }

  @media (max-width: 480px) {
    padding: 1rem;
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

    @media (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }
`;
// Área do gráfico: placeholder estilizado, com borda pontilhada e texto indicando onde o gráfico será renderizado no futuro
const ChartWrap = styled.div`
  height: 300px;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    height: 260px;
  }

  @media (max-width: 480px) {
    height: 220px;
    width: 100vw;
  }
`;
// StatsRow e Stat: estrutura para exibir estatísticas adicionais relacionadas ao CMV, como total anual, média percentual, etc., estilizados para destacar os valores e as chaves de cada estatística. Atualmente não estão sendo utilizados, mas a estrutura está pronta para receber essas informações posteriormente.
const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;
// Função de formatação para exibir os valores em reais (R$) com separadores de milhares, utilizando a API Intl.NumberFormat para formatação de moeda em português do Brasil. A função recebe um valor numérico e retorna uma string formatada como moeda, facilitando a exibição dos totais de custos e receitas no formato adequado.
const formatCurrencyt = (v) =>
  // Formata o valor numérico v para exibição em reais (R$) com separadores de milhares, utilizando a API Intl.NumberFormat para formatação de moeda em português do Brasil. A função recebe um valor numérico e retorna uma string formatada como moeda, facilitando a exibição dos totais de custos e receitas no formato adequado.
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    v,
  );

//totalCusto, totalReceita e mediaPct são calculados a partir dos dados do mockCmv, utilizando o método reduce para somar os valores dos arrays de custos e receitas, e calcular a média dos percentuais. Os resultados são formatados para exibição em reais (R$) e porcentagem, respectivamente, e exibidos no console para verificação. Esses valores também são utilizados posteriormente para exibir as estatísticas no componente Stat.
const totalCusto = mockCmv.custos.reduce((a, b) => a + b, 0);
// totalReceita é calculado somando todos os valores do array mockCmv.receitas usando o método reduce, que acumula a soma dos elementos do array. O resultado é formatado para exibição em reais (R$) com separadores de milhares usando toLocaleString('pt-BR'), e ambos os totais são exibidos no console para verificação.
const totalReceita = mockCmv.receitas.reduce((a, b) => a + b, 0);
// O cálculo da média percentual de CMV é feito somando todos os valores do array mockCmv.percentuais usando reduce, dividindo pelo número de elementos para obter a média, e formatando o resultado para exibição com uma casa decimal. A média anual de % CMV é exibida no console para verificação.
const mediaPct = (
  mockCmv.percentuais.reduce((a, b) => a + b, 0) / mockCmv.percentuais.length
).toFixed(1);

//Stat: componente para exibir uma estatística individual, com a chave (descrição) e o valor formatado, onde o valor pode ser colorido de acordo com um parâmetro opcional $color. A chave é exibida em uma fonte menor e cor mais suave, enquanto o valor é destacado com uma fonte monoespaçada e cor personalizada.
const Stat = styled.div`
  .value {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ $color }) => $color || "var(--text-primary)"};
  }
  .key {
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-top: 0.15rem;
  }

  @media (max-width: 768px) {
    .value {
      font-size: 1.1rem;
    }
    .key {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 480px) {
    .value {
      font-size: 1rem;
    }
    .key {
      font-size: 0.6rem;
    }
  }
`;

// CMVChart: componente funcional que representa o gráfico de Custo de Mercadoria Vendida, com estrutura base para ser preenchida posteriormente com a implementação do gráfico usando Chart.js ou outra biblioteca de gráficos. O useEffect é usado para confirmar que o componente foi montado corretamente, e a área do gráfico atualmente exibe um placeholder indicando onde o gráfico será renderizado no futuro.
function CMVChart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
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
    /*console.log("CMVChart — labels carregados do mock:", mockCmv.labels);
    console.log("Custos (12 meses):", mockCmv.custos);
    console.log(
      "Maior custo: R$",
      Math.max(...mockCmv.custos).toLocaleString("pt-BR"),
    );*/
    // totalCusto e totalReceita calculados a partir dos arrays de custos e receitas do mockCmv, utilizando o método reduce para somar os valores. Os resultados são formatados para exibição em reais (R$) com separadores de milhares, e exibidos no console para verificação.
    //const totalCusto = mockCmv.custos.reduce((a, b) => a + b, 0);
    // totalReceita é calculado somando todos os valores do array mockCmv.receitas usando o método reduce, que acumula a soma dos elementos do array. O resultado é formatado para exibição em reais (R$) com separadores de milhares usando toLocaleString('pt-BR'), e ambos os totais são exibidos no console para verificação.
    //const totalReceita = mockCmv.receitas.reduce((a, b) => a + b, 0);
    //console.log("Total custo anual:   R$", totalCusto.toLocaleString("pt-BR"));
    /*console.log(
      "Total receita anual: R$",
      totalReceita.toLocaleString("pt-BR"),
    );*/
    // O cálculo da média percentual de CMV é feito somando todos os valores do array mockCmv.percentuais usando reduce, dividindo pelo número de elementos para obter a média, e formatando o resultado para exibição com uma casa decimal. A média anual de % CMV é exibida no console para verificação.
    /*const mediaPct = (
      mockCmv.percentuais.reduce((a, b) => a + b, 0) /
      mockCmv.percentuais.length
    ).toFixed(1);
    console.log("% CMV por mês:", mockCmv.percentuais);
    console.log("Média % CMV anual:", mediaPct + "%");*/
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  Dados do gráfico, utilizando os valores de labels e custos do mockCmv para criar um dataset do tipo "bar" com as barras vermelhas representando o custo (CMV) para cada mês. O backgroundColor é definido como um vermelho semi-transparente, e as bordas das barras têm um raio de 4 para suavizar as extremidades.
  const visibleLabels = isMobile ? mockCmv.labels.slice(0, 3) : mockCmv.labels;
  const visibleCustos = isMobile ? mockCmv.custos.slice(0, 3) : mockCmv.custos;
  const visibleReceitas = isMobile
    ? mockCmv.receitas.slice(0, 3)
    : mockCmv.receitas;
  const visiblePercentuais = isMobile
    ? mockCmv.percentuais.slice(0, 3)
    : mockCmv.percentuais;
  const chartData = {
    labels: visibleLabels,
    datasets: [
      {
        // Dataset 1: barras vermelhas representando o custo (CMV) para cada mês, utilizando os valores do array mockCmv.custos. O backgroundColor é definido como um vermelho semi-transparente, e as bordas das barras têm um raio de 4 para suavizar as extremidades. O order é definido como 2 para garantir que as barras de custo sejam renderizadas abaixo das barras de receita (que têm order 3) no gráfico.
        type: "bar",
        label: "Custo (CMV)",
        data: visibleCustos,
        backgroundColor: "rgba(239,68,68,0.75)",
        borderRadius: 4,
        order: 2,
      },
      {
        // Dataset 2: barras azuis representando a receita para cada mês, utilizando os valores do array mockCmv.receitas. O backgroundColor é definido como um azul semi-transparente, e as bordas das barras têm um raio de 4 para suavizar as extremidades. O order é definido como 3 para garantir que as barras de receita sejam renderizadas acima das barras de custo (CMV) no gráfico.
        type: "bar",
        label: "Receita",
        data: visibleReceitas,
        backgroundColor: "rgba(0,245,196,0.15)",
        borderColor: "rgba(0,245,196,0.5)",
        borderWidth: 1,
        borderRadius: 4,
        order: 3,
      },
      {
        // Dataset 3: linha laranja de % CMV no eixo Y direito
        type: "line",
        label: "%CMV",
        data: visiblePercentuais,
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.08)",
        pointBackgroundColor: "#f97316",
        pointRadius: 4,
        tension: 0.4,
        fill: false,
        yAxisID: "y2", // eixo secundário
        order: 1,
      },
    ],
  };
  // Opções do gráfico, com customização de cores, fontes e formatação dos ticks para exibir os valores em milhares de reais (R$), além de manter a responsividade e a proporção do gráfico.
  // Opções de configuração do gráfico Chart.js
  const options = {
    // responsive: true - Faz o gráfico redimensionar automaticamente quando o container pai muda de tamanho
    responsive: true,

    // maintainAspectRatio: false - Permite que o gráfico ocupe toda a altura do container, sem manter a proporção original (largura/altura)
    maintainAspectRatio: false,

    // interaction: Configura como o gráfico responde aos eventos do mouse (hover, clique)
    interaction: {
      mode: "index", // Exibe dados de todas as séries no mesmo índice (ex: todos valores de Janeiro)
      intersect: false, // Mostra tooltip mesmo se o mouse não estiver exatamente sobre um ponto (mais fácil de interagir)
    },

    // plugins: Configurações dos recursos adicionais do Chart.js
    plugins: {
      // legend: Configura a caixa de legenda (nomes das linhas do gráfico)
      legend: {
        position: "top", // Coloca a legenda no topo do gráfico (opções: top, bottom, left, right)
        labels: {
          // Configura a aparência do texto da legenda
          color: "#8892a4", // Cor cinza para o texto (suave e discreto)
          font: {
            family: "Space Mono", // Fonte monoespaçada para manter consistência com o design
            size: window.innerWidth < 480 ? 8 : 11, // Tamanho responsivo: 8px em celulares, 11px em telas maiores
          },
        },
      },
    },

    // scales: Configura os eixos do gráfico
    scales: {
      // x: Configuração do eixo horizontal (categorias/valores)
      x: {
        ticks: {
          color: "#8892a4", // Cor cinza para os rótulos do eixo X
          maxRotation: 0, // Impede rotação dos textos (mantém horizontal)
          minRotation: 0, // Mantém textos sempre na horizontal (mais legível)
        },
        grid: { color: "#1e2d4a" }, // Cor das linhas de grade do eixo X (azul escuro suave)
      },

      // y: Configuração do eixo vertical esquerdo (valores monetários)
      y: {
        ticks: {
          color: "#8892a4", // Cor cinza para os números do eixo Y
          callback: (v) => `R$${(v / 1000).toFixed(0)}k`, // Formata valores: divide por 1000 e adiciona 'k' (ex: 50000 → R$50k)
        },
        grid: { color: "#1e2d4a" }, // Cor das linhas de grade do eixo Y esquerdo
      },

      // y2: Configuração do eixo vertical direito (segundo eixo, para percentuais)
      y2: {
        position: "right", // Posiciona este eixo no lado direito do gráfico
        ticks: {
          color: "#f97316", // Cor laranja para destacar que é um segundo eixo (geralmente percentuais)
          callback: (v) => `${v}%`, // Formata os valores adicionando símbolo de porcentagem (ex: 25.5 → 25.5%)
        },
        grid: { display: false }, // Esconde as linhas de grade para não poluir o gráfico (usar apenas linhas do eixo Y esquerdo)
      },
    },
  };
  return (
    <Card>
      {/* StatsRow: exibe as estatísticas de total anual de custos, total anual de receita e média percentual de CMV, utilizando o componente Stat para formatar cada valor com a chave correspondente. As cores dos valores são personalizadas para destacar cada estatística, com vermelho para custos, ciano para receita e laranja para a média percentual. Atualmente, os valores são calculados a partir dos dados do mockCmv e formatados para exibição em reais (R$) e porcentagem, respectivamente. */}
      <StatsRow>
        {/* Stat para total anual de custos, com valor formatado em reais (R$) e cor vermelha para destacar a informação de custo. A chave "Total de Custos" é exibida abaixo do valor em uma fonte menor e cor mais suave. */}
        <Stat $color="var(--accent-red)">
          <div className="value">{formatCurrencyt(totalCusto)}</div>
          <div className="key">Total de Custos</div>
        </Stat>
        {/* Stat para total anual de receita, com valor formatado em reais (R$) e cor ciano para destacar a informação de receita. A chave "Total de Receita" é exibida abaixo do valor em uma fonte menor e cor mais suave. */}
        <Stat $color="var(--accent-cyan)">
          <div className="value">{formatCurrencyt(totalReceita)}</div>
          <div className="key">Total de Receita</div>
        </Stat>
        {/* Stat para média percentual de CMV, com valor formatado em porcentagem e cor laranja para destacar a informação de percentual. A chave "Média % CMV" é exibida abaixo do valor em uma fonte menor e cor mais suave. */}
        <Stat $color="var(--accent-orange)">
          <div className="value">{mediaPct}%</div>
          <div className="key">Média % CMV</div>
        </Stat>
      </StatsRow>
      {/* CardHeader: exibe o título do card com a label "cmv chart", estilizada para destacar a informação de que se trata do gráfico de CMV. O título é exibido em uma fonte menor e cor ciano, enquanto o título principal é exibido em uma fonte maior e cor primária, com espaçamento entre letras para melhorar a legibilidade. */}
      <CardHeader>
        <div className="label">cmv chart</div>
      </CardHeader>

      <ChartWrap>
        {" "}
        {/* Barras vermelhas + barras cyan + linha laranja com pontos mostrando % no eixo direito */}
        <Chart type="bar" data={chartData} options={options} />
      </ChartWrap>
    </Card>
  );
}

export default CMVChart;
