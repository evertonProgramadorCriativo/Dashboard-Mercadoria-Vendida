
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
