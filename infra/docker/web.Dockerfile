# ---------- Build Stage ----------
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY . .

RUN npm install

RUN npx nx build web

# ---------- Runtime Stage ----------
FROM nginx:1.29-alpine

COPY --from=builder /app/dist/web/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]