# Etapa de desenvolvimento
FROM node:19-alpine AS development

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta do React
EXPOSE 3000

# Start do React
CMD ["npm", "start"]