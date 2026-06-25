const modules = [
  "Auth",
  "Users",
  "Products",
  "Categories",
  "Orders",
  "Reviews",
  "Favorites",
  "Chat",
  "Admin",
  "Notifications",
];

const nextSteps = [
  "Conectar el backend a PostgreSQL con la primera migración de Prisma.",
  "Crear autenticación JWT y roles para cliente y admin.",
  "Levantar CRUD de categorías, productos y pedidos.",
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-10 sm:px-10 lg:px-12">
      <section className="grid flex-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)] sm:p-10">
          <div className="mb-8 inline-flex rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--accent-strong)]">
            Marketplace starter
          </div>

          <h1
            className="max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Base inicial lista para construir un marketplace serio sin arrancar
            con complejidad innecesaria.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Frontend con Next.js y TypeScript, backend con NestJS modular,
            PostgreSQL como base principal y espacio reservado para búsqueda
            avanzada en la siguiente etapa.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-[#1f2937] p-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Frontend
              </p>
              <p className="mt-3 text-2xl font-semibold">Next.js 16</p>
            </div>
            <div className="rounded-3xl bg-[var(--surface-strong)] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Backend
              </p>
              <p className="mt-3 text-2xl font-semibold">NestJS modular</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                Datos
              </p>
              <p className="mt-3 text-2xl font-semibold">PostgreSQL + Prisma</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <section className="rounded-[2rem] border border-[var(--border)] bg-white/80 p-7 shadow-[0_18px_50px_rgba(31,41,55,0.06)]">
            <h2
              className="text-2xl font-bold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Módulos backend
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {modules.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium"
                >
                  {module}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[var(--border)] bg-[#fff8ec] p-7">
            <h2
              className="text-2xl font-bold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Siguiente etapa
            </h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[var(--muted)]">
              {nextSteps.map((step) => (
                <li key={step} className="rounded-2xl bg-white px-4 py-3">
                  {step}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
