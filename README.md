# Nx Angular + NestJS + Prisma Starter

Personal starter for small full-stack apps. One Nx workspace with an Angular frontend, a NestJS API, shared types, and Postgres via Prisma. Production compose puts Caddy in front and exposes it through a Cloudflare Tunnel.

Status: proof of concept. Only a `User` CRUD example. No auth yet (`JWT_SECRET` is in `.env.example` but unused).

## Layout

```
web/        Angular 21 app
api/        NestJS 11 API, global prefix /api
shared/     DTOs and models used by both
prisma/     schema + migrations
infra/
  docker/     api.Dockerfile, web.Dockerfile
  caddy/      Caddyfile.dev, Caddyfile.prod
  cloudflare/ tunnel config (credentials.json is committed empty; never commit the real one)
compose.dev.yml
compose.prod.yml
```

## Request flow (prod)

```
Cloudflare Tunnel -> Caddy :80 -> web (static)
                               -> api :3000 -> Postgres
```

## Run locally

```bash
npm install
cp .env.example .env
docker compose -f compose.dev.yml up postgres -d
npx prisma migrate dev
npx nx serve api      # http://localhost:3000/api
npx nx serve web      # http://localhost:4200
```

Everything in Docker:

```bash
docker compose -f compose.dev.yml up --build
```

## API

| Method | Path | |
|---|---|---|
| POST | /api/users | create |
| GET | /api/users | list |
| GET | /api/users/:id | get one |
| DELETE | /api/users/:id | delete |

## Adding a model

1. Add it to `prisma/schema.prisma`, run `npx prisma migrate dev --name <name>`.
2. Add DTOs in `shared/src/dto`, export from `shared/src/index.ts`.
3. Generate the Nest module: `npx nx g @nx/nest:resource <name> --project=api`.

## TODO

- Auth (JWT or session)
- Move Postgres password in `compose.prod.yml` to env
- Remove `nx-welcome.ts`
- CI: lint + test on push
