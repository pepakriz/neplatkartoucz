import type { Metadata } from "next"

import { TrackedLink } from "@/components/tracked-link"
import { formatCzechDate, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Metodika a transparentnost",
  description:
    "Jak web pracuje se zdroji, co je fakt, co je interpretace a jak nahlásit chybu nebo doplnění.",
  alternates: {
    canonical: "/metodika",
  },
}

export default function MethodologyPage() {
  const updatedLabel = formatCzechDate(siteConfig.updatedAt)

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:py-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4">
          <TrackedLink
            href="/"
            eventName="internal_navigation_click"
            eventProperties={{ location: "methodology_header", target: "homepage" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-800 transition-colors hover:text-orange-950"
          >
            Zpět na hlavní stránku
          </TrackedLink>
          <span className="inline-flex rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Metodika a transparentnost
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Jak tento web skládá argumenty, zdroje a interpretace.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Cílem projektu není tvrdit, že každý podnik bez terminálu jedná poctivě. Cílem je
            rozbít zkratku, že absence karet sama o sobě něco dokazuje. Text proto kombinuje
            regulace, dokumentaci poskytovatelů, mediální výpovědi a explicitně odděluje fakta od
            interpretace.
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Zdrojová základna</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Preferujeme primární zdroje: regulace, dokumentaci poskytovatelů a oficiální materiály sítí.</li>
              <li>Doplňujeme je o sekundární zdroje, když dokládají provozní zkušenost nebo veřejnou debatu.</li>
              <li>Na hlavní stránce jsou jen vybrané zdroje, plnější rešerše je uložená v repozitáři projektu.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Jak značíme jistotu</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Fakt: přímo doložený tvrzením zdroje nebo regulace.</li>
              <li>Interpretace: vysvětlení trendu nebo důsledku, které z více zdrojů dovozujeme.</li>
              <li>Obsah průběžně revidujeme. Poslední větší kontrola proběhla {updatedLabel}.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-border/70 bg-[rgba(248,244,236,0.65)] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Co na tomto webu nenajdete</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-foreground/85">
            <li>Nejde o právní, daňové ani investiční poradenství.</li>
            <li>Nejde o tvrzení, že karty jsou vždy nevýhodné nebo že hotovost je vždy lepší.</li>
            <li>Nejde o důkaz poctivosti konkrétního obchodníka. Jde o vysvětlení legitimních důvodů, proč terminál nemusí dávat smysl.</li>
          </ul>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Kontakt a opravy</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Pokud je některý zdroj zastaralý, nepřesný nebo kontext zjednodušuje příliš, pošli
              issue nebo pull request. Připomínky raději sbíráme veřejně, aby byla vidět i jejich
              následná oprava.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedLink
                href={siteConfig.issuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="outbound_click"
                eventProperties={{ location: "methodology_contact", target: "issues" }}
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Nahlásit chybu
              </TrackedLink>
              <TrackedLink
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="outbound_click"
                eventProperties={{ location: "methodology_contact", target: "repository" }}
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                Otevřít repozitář
              </TrackedLink>
            </div>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Provozní poznámka</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Produkční metadata, sitemap a canonical URL se řídí hodnotou{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">NEXT_PUBLIC_SITE_URL</code>.
              Pokud web poběží na jiné doméně než {siteConfig.siteUrl}, uprav tuto proměnnou před
              nasazením.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
