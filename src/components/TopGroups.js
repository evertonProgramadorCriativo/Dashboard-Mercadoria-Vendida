import React, { useEffect } from "react";
import styled from "styled-components";
import { mockGroups } from "../mocks/dashboardMocks";
// TopGroups — card estilizado para exibir os grupos mais vendidos, com título, rótulo e área de conteúdo
const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  position: relative;
  width: 100%;

  /* linha azul/roxa no topo — diferencia do CMVChart que é cyan/azul */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: var(--radius) var(--radius) 0 0;
    background: var(--accent-blue);
  }
`;
// CardLabel — rótulo pequeno no topo do card, estilizado para indicar o tipo de informação (top groups) e criar hierarquia visual com o título principal do card (Grupos Mais Vendidos)
const CardLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.3rem;
`;
// CardTitle — título do card, estilizado para se destacar e indicar o conteúdo esperado (Grupos Mais Vendidos)
const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
`;
// Area — placeholder estilizado para a lista de grupos mais vendidos, com borda tracejada e texto centralizado indicando que a lista será renderizada ali
const Area = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
`;

function TopGroups() {
  useEffect(() => {
    console.log("TopGroups — dados do mock carregados:");
    // Exibe no console a lista de grupos mais vendidos, formatando os valores de total vendido, quantidade e percentual para facilitar a leitura. A função console.table é utilizada para exibir os dados em formato tabular, facilitando a visualização e comparação dos grupos. Cada grupo é mapeado para um objeto com as propriedades grupo, totalVendido (formatado como moeda), quantidade e percentual (formatado como porcentagem).
    console.table(
      mockGroups.map((g) => ({
        grupo: g.grupo,
        totalVendido: `R$ ${g.totalVendido.toLocaleString("pt-BR")}`,
        quantidade: g.quantidadeVendida,
        percentual: `${g.percentualTotal}%`,
      })),
    );

    // Confirma o grupo líder
    const lider = mockGroups[0];
    console.log(
      "Grupo líder:",
      lider.grupo,
      "->",
      `R$ ${lider.totalVendido.toLocaleString("pt-BR")}`,
    );
  }, []);

  return (
    <Card>
      <CardLabel>top groups </CardLabel>
      <CardTitle>Grupos Mais Vendidos</CardTitle>
      <Area>{mockGroups.length} grupos carregados</Area>
    </Card>
  );
}

export default TopGroups;
