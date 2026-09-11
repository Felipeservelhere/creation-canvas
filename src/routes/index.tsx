import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Building2, Mail, ShieldCheck, Users } from "lucide-react";
import caloryLogo from "@/assets/calory.png.asset.json";
import csempLogo from "@/assets/csemp.png.asset.json";
import csemiteMark from "@/assets/csemite-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portal de escritório — CSEmite e CSEmp em um só acesso" },
      {
        name: "description",
        content:
          "Acesse o portal de escritório de contabilidade e gerencie clientes do CSEmite e do CSEmp em uma única carteira.",
      },
      { property: "og:title", content: "Portal de escritório — CSEmite e CSEmp" },
      {
        property: "og:description",
        content:
          "Um portal. Dois sistemas. Uma visão completa da sua carteira de clientes contábeis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Users, label: "Seus clientes não precisam criar uma nova conta" },
  { icon: Building2, label: "Alterne entre empresas sem perder o contexto" },
  { icon: ShieldCheck, label: "Ambiente seguro" },
];

function Index() {
  const [email, setEmail] = useState("");

  return (
    <main className="hero-bg hero-grid relative flex min-h-svh flex-col overflow-hidden px-5 py-5 sm:px-8 md:px-12 md:py-6 lg:h-svh lg:px-16">
      <header className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <img
            src={caloryLogo.url}
            alt="Calory Sistemas"
            className="h-10 w-auto shrink-0 sm:h-12 lg:h-14"
          />
          <span className="hidden h-10 w-px shrink-0 bg-foreground/20 sm:block lg:h-12" />
          <div className="min-w-0 leading-tight">
            <h1 className="truncate text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
              Portal de escritório
            </h1>
            <p className="truncate text-xs text-muted-foreground sm:text-sm">Contabilidade</p>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 py-8 md:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <section className="min-w-0">
          <h2 className="text-[clamp(1.85rem,5.5vw,3.1rem)] font-bold leading-[1.08] tracking-tight">
            Um portal. Dois sistemas.
            <br />
            <span className="text-primary-glow">Uma visão completa.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Gerencie clientes do CSEmite e do CSEmp em uma única carteira — sem trocar de conta ou
            duplicar cadastros.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-tile text-primary-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 text-sm sm:text-base md:text-lg">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full rounded-[1.75rem] bg-card p-6 shadow-[var(--shadow-card)] sm:p-7 md:rounded-[2rem] md:p-8">
          <h3 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
            Acesso do escritório
          </h3>
          <p className="mt-1 text-sm text-card-foreground/60 sm:text-base">
            Use seu e-mail para continuar
          </p>

          <form
            className="mt-5"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="email" className="text-sm font-semibold text-card-foreground">
              E-mail
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-card-foreground/10 bg-background/[0.03] px-3 py-3 sm:px-4 sm:py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-card-foreground/10 text-card-foreground/60">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="contato@escritorio.com.br"
                className="w-full min-w-0 bg-transparent text-base text-card-foreground outline-none placeholder:text-card-foreground/40"
              />
            </div>

            <button
              type="submit"
              className="btn-cta mt-5 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold"
            >
              Continuar
              <ArrowRight className="h-5 w-5 shrink-0" />
            </button>
          </form>

          <div className="mt-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-card-foreground/10" />
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-glow/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="h-px flex-1 bg-card-foreground/10" />
          </div>
        </section>
      </div>

      <footer className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            Esta área atende a estes sistemas Calory
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <span className="flex items-center gap-2 rounded-xl bg-card px-3 py-2">
              <img src={csempLogo.url} alt="CSEmp" className="h-4 w-auto object-contain" />
            </span>
            <span className="flex items-center gap-2 rounded-xl bg-card px-3 py-2">
              <img src={csemiteMark.url} alt="" className="h-5 w-5 object-contain" />
              <span className="text-sm font-semibold text-card-foreground">CSEmite</span>
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-sm text-muted-foreground">
          <a href="/privacidade" className="transition-colors hover:text-foreground">
            Privacidade
          </a>
          <span className="text-muted-foreground/40">|</span>
          <a href="/suporte" className="transition-colors hover:text-foreground">
            Suporte
          </a>
        </nav>
      </footer>
    </main>
  );
}
