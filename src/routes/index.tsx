import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Building2, Link2, Mail, ShieldCheck, Users } from "lucide-react";
import csempLogo from "@/assets/csemp.png.asset.json";
import csemiteLogo from "@/assets/csemite.png.asset.json";

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
    <main className="hero-bg hero-grid relative flex min-h-screen flex-col overflow-hidden px-6 py-8 md:px-14 md:py-10">
      <header className="relative z-10 flex items-center gap-4">
        <img src={csemiteLogo.url} alt="CSEmite" className="h-11 w-11 object-contain" />
        <div className="leading-tight">
          <h1 className="text-xl font-bold tracking-tight md:text-2xl">Portal de escritório</h1>
          <p className="text-sm text-muted-foreground">Contabilidade</p>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-20 items-center gap-2 rounded-2xl bg-card px-5 shadow-[var(--shadow-card)]">
              <img src={csempLogo.url} alt="CSEmp" className="h-8 object-contain" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary-glow" />
            </div>
            <span className="h-px w-4 border-t border-dashed border-primary-glow/60" />
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-glow/50 text-primary-glow">
              <Link2 className="h-5 w-5" />
            </span>
            <span className="h-px w-4 border-t border-dashed border-primary-glow/60" />
            <div className="flex h-20 items-center gap-2 rounded-2xl bg-card px-5 shadow-[var(--shadow-card)]">
              <img src={csemiteLogo.url} alt="CSEmite" className="h-9 object-contain" />
              <span className="text-lg font-semibold text-card-foreground">CSEmite</span>
              <span className="h-2.5 w-2.5 rounded-full bg-primary-glow" />
            </div>
          </div>

          <h2 className="mt-9 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Um portal. Dois sistemas.
            <br />
            <span className="text-primary-glow">Uma visão completa.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Gerencie clientes do CSEmite e do CSEmp em uma única carteira — sem trocar de conta ou
            duplicar cadastros.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-tile text-primary-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base md:text-lg">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
          <h3 className="text-3xl font-bold tracking-tight text-card-foreground">
            Acesso do escritório
          </h3>
          <p className="mt-1 text-base text-card-foreground/60">Use seu e-mail para continuar</p>

          <form
            className="mt-8"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="email" className="text-sm font-semibold text-card-foreground">
              E-mail
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-card-foreground/10 bg-background/[0.03] px-4 py-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-foreground/10 text-card-foreground/60">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="contato@escritorio.com.br"
                className="w-full bg-transparent text-base text-card-foreground outline-none placeholder:text-card-foreground/40"
              />
            </div>

            <button
              type="submit"
              className="btn-cta mt-5 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold"
            >
              Continuar
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-card-foreground/10" />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-glow/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="h-px flex-1 bg-card-foreground/10" />
          </div>
        </section>
      </div>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-6">
        <div>
          <span className="block h-px w-10 bg-primary-glow" />
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Contabilidade mais simples
            <br />
            para grandes resultados
          </p>
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
