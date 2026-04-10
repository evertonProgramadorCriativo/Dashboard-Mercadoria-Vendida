
#  Front-End - Dashboard React

Este projeto é o **front-end de um dashboard** desenvolvido em **React**, responsável por exibir informações visuais como:

-  Gráfico de CMV (Custo de Mercadoria Vendida)
-  Grupos mais vendidos
-  Produtos menos vendidos  

A aplicação consome dados de uma API (Spring Boot) e apresenta as informações de forma clara e interativa.

---

##  Tecnologias utilizadas

- React (Create React App)
- JavaScript
- Chart.js (gráficos)
- Styled-components / CSS
- Axios (requisições HTTP)
- Docker (ambiente isolado)

---

##  Executando o projeto com Docker

###  Subir o container

```bash
docker compose up --build
```

**O que esse comando faz:**
- Constrói a imagem do projeto (`--build`)
- Cria o container do frontend
- Instala dependências automaticamente
- Inicia a aplicação React

---

###  Parar o container

```bash
docker compose down
```

 **O que esse comando faz:**
- Para todos os containers em execução
- Remove os containers criados
- Libera as portas utilizadas

---

###  Ver containers ativos

```bash
docker ps
```

 **O que esse comando faz:**
- Lista todos os containers que estão rodando
- Permite verificar se o frontend está ativo

---

###  Acessar o container

```bash
docker exec -it dashboard-frontend-dev sh
```

 **O que esse comando faz:**
- Acessa o terminal interno do container
- Permite rodar comandos manualmente (ex: `npm install`, `npm start`)
- Útil para debug e testes

---

##  Acesso à aplicação

Após subir o container, acesse:

```
http://localhost:3000
```

##  RESUMO DAS FUNCIONALIDADES - DASHBOARD CMV

###  Estrutura Base (v0.1)
| Funcionalidade | Descrição |
|----------------|-----------|
| **Entry Point** | `index.js` com log de inicialização do React |
| **App Root** | Componente raiz com fundo escuro e texto de verificação |
| **Global Style** | CSS variables, reset global, tema escuro (`#080c18`, `#00f5c4`) |
| **Header** | Logo "CMV", título "Dashboard Analytics", badge de versão |
| **Main Layout** | Grid responsivo com 3 slots (full-width + 2 colunas) |
| **Mocks** | Dados falsos para CMV (12 meses), grupos (5) e produtos (10) |

---

### Gráfico CMV 
| Funcionalidade | Descrição |
|----------------|-----------|
| **Chart.js** | Biblioteca instalada e configurada |
| **Dataset 1 - Custo** | Barras vermelhas mostrando custo mensal (R$) |
| **Dataset 2 - Receita** | Barras cyan translúcidas sobrepostas |
| **Dataset 3 - % CMV** | Linha laranja no eixo Y secundário |
| **Stats Cards** | Totais anuais: Custo (R$622.700), Receita (R$1.443.000), Média % (43,1%) |
| **Tooltip/Legenda** | Interativo com informações por mês |

---

###  Grupos Mais Vendidos 
| Funcionalidade | Descrição |
|----------------|-----------|
| **Lista de Grupos** | 5 grupos: Eletrônicos, Roupas & Moda, Alimentos, Casa & Decoração, Esportes |
| **Valor + Quantidade** | Exibe R$ total e unidades vendidas por grupo |
| **Barra Progresso** | Proporcional ao maior valor (Eletrônicos = 100%) |
| **Badge %** | Percentual de participação de cada grupo |
| **Animações** | Fade-up escalonado + barras crescendo da esquerda |

---

## Produtos Menos Vendidos
| Funcionalidade | Descrição |
|----------------|-----------|
| **Tabela Completa** | 4 colunas: Produto, Valor, Vendas, Estoque |
| **Badge Vendas** | Vermelho destacando baixa quantidade vendida |
| **Badge Estoque** |  Cyan (OK) / Laranja (crítico ≤ 5 unidades) |
| **Hover nas Linhas** | Fundo mais claro ao passar o mouse |
| **Animações** | Entrada escalonada linha por linha |

---



## MÉTRICAS FINAIS

| Indicador | Valor |
|-----------|-------|
| **Features** | 5 |
| **Commits** | 37 |
| **Componentes** | 6 (Header, MainLayout, CMVChart, TopGroups, LeastSold, Footer) |
| **Dados Mockados** | 12 meses CMV · 5 grupos · 10 produtos |
| **Versão** | v1.0.0 |

 

 