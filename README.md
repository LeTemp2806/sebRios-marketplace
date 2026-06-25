# Marketplace

Base inicial de un marketplace con arquitectura de monolito modular:

- `apps/frontend`: Next.js + React + TypeScript
- `apps/backend`: NestJS + TypeScript
- `PostgreSQL`: base de datos principal
- `Prisma`: acceso a datos y esquema inicial
- `Meilisearch`: reservado para una siguiente fase

## Primer arranque

1. Copia `apps/backend/.env.example` a `apps/backend/.env`.
2. Levanta PostgreSQL con `docker compose up -d`.
3. Inicia el backend desde `apps/backend`.
4. Inicia el frontend desde `apps/frontend`.

## Módulos iniciales

- `auth`
- `users`
- `products`
- `categories`
- `orders`
- `reviews`
- `favorites`
- `chat`
- `admin`
- `notifications`

En esta primera patada quedaron fuera `payments`, `redis`, almacenamiento de imágenes y sesiones avanzadas.
