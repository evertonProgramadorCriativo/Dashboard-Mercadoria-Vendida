import React from "react";
import styled from "styled-components";
import CMVChart from "./CMVChart";
// MainLayout — grid com 3 slots: CMVChart, TopGroups, LeastSold
const Wrapper = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
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
  }
`;
// Grid responsivo: 1 coluna em telas pequenas, 2 colunas em telas médias, e 2 colunas com proporção 3:2 em telas grandes
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

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
// Placeholder estilizado para os slots, com título e descrição do conteúdo esperado
const Placeholder = styled.div`
  background: var(--bg-card);
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  min-height: ${({ $h }) => $h || "200px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  .slot-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--accent-cyan);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .slot-name {
    font-size: 0.9rem;
    color: var(--text-muted);
  }
`;
// MainLayout component: exibe o título da página e os placeholders para os gráficos, com console.table para mostrar o status de cada slot
function MainLayout() {
  console.table({
    "slot-1 (full)": "CMVChart — aguardando  ",
    "slot-2": "TopGroups — aguardando  ",
    "slot-3": "LeastSold — aguardando  ",
  });

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
        <Placeholder className="full" $h="340px">
          <CMVChart />
        </Placeholder>

        <Placeholder $h="280px">
          <span className="slot-label">slot 2</span>
          <span className="slot-name">TopGroups </span>
        </Placeholder>

        <Placeholder $h="280px">
          <span className="slot-label">slot 3</span>
          <span className="slot-name">LeastSold </span>
        </Placeholder>
      </Grid>
    </Wrapper>
  );
}

export default MainLayout;
