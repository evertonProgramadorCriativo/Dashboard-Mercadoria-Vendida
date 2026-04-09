//  Dados falsos que simulam a resposta da API

// Mock para o gráfico de CMV (Custo de Mercadoria Vendida) ao longo dos meses do ano
//labels: meses do ano, custos: valores de CMV para cada mês, receitas: valores de receita para cada mês, percentuais: porcentagem de CMV em relação à receita para cada mês
//custos e receitas são valores fictícios, e os percentuais são calculados com base nesses valores para simular uma relação realista entre CMV e receita ao longo do ano
// percentuais variam entre 42.3% e 43.7%, o que é típico para muitas empresas, onde o CMV representa uma parte significativa da receita, mas não a totalidade
export const mockCmv = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  custos: [
    42000, 38500, 45200, 51000, 48700, 53400, 49800, 55600, 61200, 58900, 67300,
    72100,
  ],
  receitas: [
    98000, 91000, 105000, 118000, 112000, 124000, 115000, 129000, 141000,
    136000, 155000, 165000,
  ],
  percentuais: [
    42.9, 42.3, 43.0, 43.2, 43.5, 43.1, 43.3, 43.1, 43.4, 43.3, 43.4, 43.7,
  ],
};
//MoockGroups: dados falsos para o gráfico de grupos de produtos mais vendidos, com informações sobre o total vendido, quantidade vendida e percentual do total para cada grupo

export const mockGroups = [
  {
    grupo: "Eletrônicos",
    totalVendido: 185400,
    quantidadeVendida: 1240,
    percentualTotal: 32.4,
  },
  {
    grupo: "Roupas & Moda",
    totalVendido: 142700,
    quantidadeVendida: 3680,
    percentualTotal: 24.9,
  },
  {
    grupo: "Alimentos",
    totalVendido: 98200,
    quantidadeVendida: 5420,
    percentualTotal: 17.2,
  },
  {
    grupo: "Casa & Decoração",
    totalVendido: 76500,
    quantidadeVendida: 980,
    percentualTotal: 13.4,
  },
  {
    grupo: "Esportes",
    totalVendido: 54300,
    quantidadeVendida: 760,
    percentualTotal: 9.5,
  },
];
//mockProducts: dados falsos para o gráfico de produtos menos vendidos, com informações sobre o total vendido, quantidade vendida e estoque disponível para cada produto
export const mockProducts = [
  {
    produto: "Câmera Analógica Vintage",
    categoria: "Eletrônicos",
    totalVendido: 2400,
    quantidadeVendida: 3,
    estoque: 45,
  },
  {
    produto: "Tapete Persa Decorativo",
    categoria: "Decoração",
    totalVendido: 3200,
    quantidadeVendida: 4,
    estoque: 12,
  },
  {
    produto: "Kit Telescópio Profissional",
    categoria: "Ciência",
    totalVendido: 4100,
    quantidadeVendida: 5,
    estoque: 8,
  },
  {
    produto: "Forno a Lenha Portátil",
    categoria: "Cozinha",
    totalVendido: 1800,
    quantidadeVendida: 6,
    estoque: 20,
  },
  {
    produto: "Violão Clássico Premium",
    categoria: "Música",
    totalVendido: 2900,
    quantidadeVendida: 7,
    estoque: 15,
  },
  {
    produto: "Prancha de Surf 7'0\"",
    categoria: "Esportes",
    totalVendido: 3500,
    quantidadeVendida: 8,
    estoque: 6,
  },
  {
    produto: "Impressora 3D Compacta",
    categoria: "Tecnologia",
    totalVendido: 4800,
    quantidadeVendida: 9,
    estoque: 11,
  },
  {
    produto: "Aquário 200L Completo",
    categoria: "Pets",
    totalVendido: 1950,
    quantidadeVendida: 11,
    estoque: 9,
  },
  {
    produto: "Bicicleta de Bambu",
    categoria: "Esportes",
    totalVendido: 2200,
    quantidadeVendida: 12,
    estoque: 4,
  },
  {
    produto: "Mesa de Sinuca Oficial",
    categoria: "Lazer",
    totalVendido: 8900,
    quantidadeVendida: 14,
    estoque: 3,
  },
];
