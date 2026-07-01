FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

COPY nx.json ./
COPY tsconfig.base.json ./

RUN npm install

COPY . .

RUN npx nx build api

EXPOSE 3000

CMD ["node", "dist/api/main.js"]