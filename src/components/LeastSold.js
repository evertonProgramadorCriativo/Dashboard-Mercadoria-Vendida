import React, { useEffect } from "react";
import styled from "styled-components";
import { mockProducts } from "../mocks/dashboardMocks";

// LeastSold — estrutura base: card com header e área vazia
const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  position: relative;
  width: 100%;
  height: 100%;

  /* linha laranja/vermelha no topo — diferencia dos outros cards */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: var(--radius) var(--radius) 0 0;
    background: #ef4444;
  }
`;
// CardLabel — rótulo pequeno no topo do card, com fonte monoespaçada e cor de destaque
const CardLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #f97316;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.3rem;
`;
// CardTitle — título do card, com fonte maior e peso 800 para destacar
const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
`;

// Table — estrutura base para exibir os produtos menos vendidos, com cabeçalho e linhas de dados
const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
// TableHead — cabeçalho da tabela, com estilo de grid para alinhar as colunas e fonte monoespaçada para facilitar a leitura dos dados
const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px 55px 60px;
  gap: 0.5rem;
  padding: 0 0.5rem 0.6rem;
  border-bottom: 1px solid var(--border);

  span {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;

    &:not(:first-child) {
      text-align: right;
    }
  }
`;
// TableRow — linha de dados da tabela, com estilo de grid para alinhar as colunas e padding para separar visualmente os dados
function LeastSold() {
  useEffect(() => {
    console.log("Total de produtos:", mockProducts.length);

    // Produto com menor venda
    const menor = mockProducts[0];
    console.log(
      " Produto menos vendido:",
      menor.produto,
      `apenas ${menor.quantidadeVendida} un. vendidas`,
    );

    // Alerta de estoque crítico (≤ 5 unidades)
    const criticos = mockProducts.filter((p) => p.estoque <= 5);
    console.warn(
      ` ${criticos.length} produto(s) com estoque crítico (≤ 5 un.):`,
    );
    // Lista detalhada dos produtos com estoque crítico, exibindo o nome do produto e a quantidade em estoque para facilitar a identificação e tomada de decisão
    criticos.forEach((p) =>
      console.warn(`  → ${p.produto}: ${p.estoque} un. em estoque`),
    );
    // Tabela completa de produtos, ordenada por quantidade vendida (do menor para o maior)
    console.table(
      mockProducts.map((p) => ({
        produto: p.produto,
        categoria: p.categoria,
        vendas: p.quantidadeVendida,
        estoque: p.estoque,
      })),
    );
  }, []);

  return (
    <Card>
      <CardLabel>least sold </CardLabel>
      <CardTitle>Produtos Menos Vendidos</CardTitle>
      <Table>
        <TableHead>
          <span>Produto</span>
          <span>Valor</span>
          <span>Vendas</span>
          <span>Estoque</span>
        </TableHead>
      </Table>
    </Card>
  );
}

export default LeastSold;
