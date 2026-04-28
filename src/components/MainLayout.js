import React from "react";
import styled from "styled-components";
import CMVChart from "./CMVChart";
import TopGroups from "./TopGroups";
import LeastSold from "./LeastSold";
// MainLayout — grid com 3 slots: CMVChart, TopGroups, LeastSold
const Wrapper = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  /* mobile: menos padding lateral */
  @media (max-width: 780px) {
    padding: 0;
  }
`;

const PageTitle = styled.div`
  margin-bottom: 1.75rem;

  .sub {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.03em;

    em {
      font-style: normal;
      color: var(--accent-cyan);
    }
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1.5rem 0.3rem;
  }
`;
// Grid responsivo: 1 coluna em telas pequenas, 2 colunas em telas médias, e 2 colunas com proporção 3:2 em telas grandes
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  /* Item .full - ocupa TODAS as 4 colunas */

  .full {
    grid-column: 1 / -1;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 3fr 2fr;
  }
`;

// MainLayout component: exibe o título da página e os placeholders para os gráficos, com console.table para mostrar o status de cada slot
function MainLayout() {
  /**  console.table({
    "slot-1 (full)": "CMVChart — aguardando  ",
    "slot-2": "TopGroups — aguardando  ",
    "slot-3": "LeastSold — aguardando  ",
  });*/

  return (
    <Wrapper>
      {/* Título da página com subtítulo e destaque em "Mercadoria Vendida" */}
      <PageTitle>
        <div className="sub">Visão geral · 2026</div>
        <h2>
          Custo de <em>Mercadoria Vendida</em>
        </h2>
      </PageTitle>
      {/* Grid responsivo com 3 slots: o primeiro ocupa toda a largura, e os outros dois ficam lado a lado em telas maiores */}
      <Grid>
        <div>
          <CMVChart />
        </div>

        <TopGroups />

        <LeastSold />
      </Grid>
    </Wrapper>
  );
}

export default MainLayout;
