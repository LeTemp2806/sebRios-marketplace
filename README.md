# Marketplace

Base inicial de un marketplace con arquitectura de monolito modular:

- `apps/frontend`: Next.js + React + TypeScript
- `apps/backend`: NestJS + TypeScript
- `PostgreSQL`: base de datos principal
- `Prisma`: acceso a datos y esquema inicial
- `Meilisearch`: reservado para una siguiente fase

## Primer arranque

1. Copia `apps/backend/.env.example` a `apps/backend/.env`.
2. Asegura un PostgreSQL local escuchando en `localhost:5432`.
3. Ejecuta `npm install`.
4. Ejecuta `npm --workspace apps/backend run prisma:generate`.
5. Ejecuta `npm --workspace apps/backend run prisma:migrate`.
6. Inicia el backend con `npm run dev:backend`.
7. Inicia el frontend con `npm run dev:frontend`.

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
