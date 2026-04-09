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

// List e Item — estilos para a lista de grupos mais vendidos, com espaçamento entre os itens e borda inferior para separar visualmente cada grupo. O último item da lista não tem borda inferior para evitar uma linha extra no final da lista.
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
// BarTrack — barra de fundo para representar o total de vendas do grupo líder, servindo como referência para calcular a largura das barras de preenchimento (BarFill) dos outros grupos. A barra tem uma altura fixa, borda arredondada e cor de fundo definida pela variável --border, criando um contraste visual com as barras de preenchimento coloridas.
const BarTrack = styled.div`
  height: 5px;
  background: var(--border);
  border-radius: 3px;
  margin-top: 0.4rem;
  overflow: hidden;
`;
// BarFill — barra de preenchimento para representar visualmente o percentual de vendas de cada grupo em relação ao grupo líder. A largura da barra é calculada com base no percentual de vendas, e a cor é definida por um gradiente que varia para cada grupo, criando uma distinção visual entre eles. O componente utiliza a propriedade $idx para determinar qual gradiente aplicar, garantindo que cada grupo tenha uma cor diferente mesmo que o número de grupos seja maior que o número de gradientes definidos.
const BarFill = styled.div`
  height: 100%;
  border-radius: 3px;
  width: ${({ $pct }) => $pct}%;

  /* cada índice recebe um gradiente diferente */
  background: ${({ $idx }) => {
    const gradients = [
      "linear-gradient(90deg, #3b82f6, #06b6d4)",
      "linear-gradient(90deg, #a855f7, #ec4899)",
      "linear-gradient(90deg, #00f5c4, #3b82f6)",
      "linear-gradient(90deg, #f97316, #f59e0b)",
      "linear-gradient(90deg, #ef4444, #f97316)",
    ];
    return gradients[$idx % gradients.length];
  }};
`;

// Item — cada item da lista representa um grupo mais vendido, exibindo o nome do grupo, o total vendido formatado como moeda, a quantidade vendida e o percentual do total de vendas. O estilo inclui uma borda inferior para separar visualmente os itens, e o último item não tem borda para evitar uma linha extra no final da lista.

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`;
// ItemTop — parte superior de cada item da lista, onde o nome do grupo é exibido à esquerda e as informações de quantidade e total vendido são exibidas à direita. O layout utiliza flexbox para alinhar os elementos e criar um espaçamento entre eles, garantindo que o nome do grupo e as informações de vendas sejam claramente separados e fáceis de ler.
const ItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// GroupName — nome do grupo mais vendido, estilizado para se destacar com uma fonte maior e cor de destaque, facilitando a identificação visual do grupo líder em vendas.
const GroupName = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
`;
// Meta — informações adicionais sobre o grupo mais vendido, incluindo a quantidade vendida e o total vendido formatado como moeda. A quantidade é exibida com um estilo de badge para destacar visualmente, enquanto o total vendido é exibido com uma fonte monoespaçada e cor de destaque para facilitar a leitura. O layout utiliza flexbox para alinhar os elementos e criar um espaçamento entre eles, garantindo que as informações sejam claramente separadas e fáceis de ler.
const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .value {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--accent-cyan);
  }

  .qty {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--text-muted);
    background: var(--bg-secondary, #0d1225);
    border: 1px solid var(--border);
    padding: 0.1rem 0.45rem;
    border-radius: 20px;
  }
`;
// Calcula o maior valor para proporção
const maxVal = Math.max(...mockGroups.map((g) => g.totalVendido));

// Utilitário de formatação
const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function TopGroups() {
  useEffect(() => {
    console.log("TopGroups — dados do mock carregados:");
    // Exibe no console a lista de grupos mais vendidos, formatando os valores de total vendido, quantidade e percentual para facilitar a leitura. A função console.table é utilizada para exibir os dados em formato tabular, facilitando a visualização e comparação dos grupos. Cada grupo é mapeado para um objeto com as propriedades grupo, totalVendido (formatado como moeda), quantidade e percentual (formatado como porcentagem).
    /* console.table(
      mockGroups.map((g) => ({
        grupo: g.grupo,
        totalVendido: `R$ ${g.totalVendido.toLocaleString("pt-BR")}`,
        quantidade: g.quantidadeVendida,
        percentual: `${g.percentualTotal}%`,
      })),
    );*/

    // Confirma o grupo líder
    /**
    const lider = mockGroups[0];
    console.log(
      "Grupo líder:",
      lider.grupo,
      "->",
      `R$ ${lider.totalVendido.toLocaleString("pt-BR")}`,
    ); */

    console.log(
      "formatCurrencyMaior valor para proporção das barras: R$",
      maxVal.toLocaleString("pt-BR"),
    );
    mockGroups.forEach((g, i) => {
      const pct = ((g.totalVendido / maxVal) * 100).toFixed(1);
      console.log(`formatCurrencyBarra ${i + 1} — ${g.grupo}: ${pct}%`);
    });
  }, []);

  return (
    <Card>
      <CardLabel>top groups </CardLabel>
      <CardTitle>Grupos Mais Vendidos</CardTitle>
      {/* Lista de grupos mais vendidos, renderizada a partir dos dados do mockGroups. Cada item da lista exibe o nome do grupo, o total vendido formatado como moeda, a quantidade vendida e o percentual do total de vendas. O componente List é utilizado para organizar os itens em uma lista vertical, e o componente Item é utilizado para estilizar cada item da lista. */}
      <List>
        {/* O map percorre o array mockGroups e para cada grupo calcula o percentual de vendas em relação ao grupo líder (maxVal) para determinar a largura da barra de preenchimento (BarFill). Cada item da lista exibe o nome do grupo, o total vendido formatado como moeda, a quantidade vendida e o percentual do total de vendas. A barra de preenchimento é renderizada dentro do BarTrack, utilizando a propriedade $pct para definir a largura proporcional ao percentual de vendas.*/}
        {mockGroups.map((g, i) => {
          const pct = (g.totalVendido / maxVal) * 100;
          return (
            <Item key={g.grupo}>
              <ItemTop>
                <GroupName>{g.grupo}</GroupName>
                {/* Meta exibe a quantidade vendida e o total vendido formatado como moeda, utilizando a função formatCurrency para garantir a formatação correta. A quantidade vendida é exibida com um estilo de badge para destacar visualmente, enquanto o total vendido é exibido com uma fonte monoespaçada e cor de destaque para facilitar a leitura. */}
                <Meta>
                  <span className="qty">{g.quantidadeVendida} un.</span>
                  <span className="value">
                    {formatCurrency(g.totalVendido)}
                  </span>
                </Meta>
              </ItemTop>{" "}
              {/* Barra de preenchimento proporcional ao percentual de vendas do grupo em relação ao grupo líder */}
              <BarTrack>
                <BarFill $pct={pct} $idx={i} />
              </BarTrack>
            </Item>
          );
        })}
      </List>
    </Card>
  );
}

export default TopGroups;
