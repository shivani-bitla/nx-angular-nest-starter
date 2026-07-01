# Nx Angular + NestJS + Prisma Starter

A production-ready full-stack starter template built with **Nx Monorepo**, **Angular**, **NestJS**, **Prisma**, **PostgreSQL**, **Docker**, **Caddy**, and **Cloudflare Tunnel**.

The project demonstrates a modern full-stack architecture with frontend, backend, shared libraries, database access, reverse proxy, containerization, and public deployment.

---

## Features

- Angular frontend
- NestJS REST API
- Nx Monorepo architecture
- Shared DTOs and types
- Prisma ORM
- PostgreSQL
- Dockerized development and production
- Docker Compose orchestration
- Caddy reverse proxy
- Cloudflare Tunnel support
- Environment-based configuration
- Clean project structure

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Angular |
| Backend | NestJS |
| Monorepo | Nx |
| Language | TypeScript |
| ORM | Prisma |
| Database | PostgreSQL |
| Reverse Proxy | Caddy |
| Containers | Docker |
| Public Access | Cloudflare Tunnel |

---

# Project Structure

```text
.
├── api/
│   └── NestJS backend
│
├── web/
│   └── Angular frontend
│
├── shared/
│   └── Shared DTOs & Types
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── infra/
│   ├── docker/
│   ├── caddy/
│   ├── cloudflare/
│   └── github/
│
├── compose.dev.yml
├── compose.prod.yml
└── README.md
```

---

# Architecture

```text
                    Internet
                        │
                        ▼
              Cloudflare Tunnel
                        │
                        ▼
                    Caddy Proxy
                  ┌─────────────┐
                  │             │
                  ▼             ▼
            Angular App     NestJS API
                                   │
                                   ▼
                              Prisma ORM
                                   │
                                   ▼
                              PostgreSQL
```

---

# Getting Started

## Clone

```bash
git clone https://github.com/<username>/<repository>.git

cd <repository>
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment

Create a `.env` file.

Example:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fullstack?schema=public
PORT=3000
CORS_ORIGIN=http://localhost
```

---

## Run PostgreSQL

```bash
docker compose -f compose.dev.yml up postgres -d
```

---

## Run Backend

```bash
npx nx serve api
```

---

## Run Frontend

```bash
npx nx serve web
```

Angular

```
http://localhost:4200
```

NestJS

```
http://localhost:3000/api
```

---

# Running Everything with Docker

```bash
docker compose -f compose.dev.yml up --build
```

Services

| Service | URL |
|----------|-----|
| Angular | http://localhost |
| API | http://localhost/api |
| PostgreSQL | localhost:5432 |

---

# Database

Generate Prisma Client

```bash
npx prisma generate
```

Create a migration

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# API Endpoints

## Users

| Method | Endpoint |
|---------|----------|
| GET | /api/users |
| POST | /api/users |
| GET | /api/users/:id |
| DELETE | /api/users/:id |

---

# Deployment

The application is containerized using Docker.

Production architecture:

```text
Cloudflare
      │
      ▼
Cloudflare Tunnel
      │
      ▼
Caddy
 ├── Angular
 └── NestJS
        │
        ▼
   PostgreSQL
```

---

# Development Workflow

```bash
git checkout -b feature/my-feature

git commit

git push
```

---

# Roadmap

- Authentication (JWT)
- Refresh Tokens
- Role-Based Access Control
- File Uploads
- User Profiles
- Dashboard
- Unit Testing
- E2E Testing
- GitHub Actions CI/CD
- Monitoring & Logging

---

# Why Nx?

This project uses Nx to:

- Organize frontend and backend in a single workspace
- Share DTOs and types
- Simplify builds
- Improve developer experience
- Scale into larger applications

---

# License

MIT License


environment:
  DATABASE_URL: ${DATABASE_URL}

  DATABASE_URL=postgresql://postgres:postgres@postgres:5432/fullstack?schema=public