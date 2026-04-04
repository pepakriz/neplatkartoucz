import type { Metadata } from "next"

import { TrackedLink } from "@/components/tracked-link"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Soukromí a měření",
  description:
    "Jak web pracuje s měřením návštěvnosti, jaké externí služby používá a kudy vede kontakt na projekt.",
  alternates: {
    canonical: "/soukromi",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:py-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4">
          <TrackedLink
            href="/"
            eventName="internal_navigation_click"
            eventProperties={{ location: "privacy_header", target: "homepage" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-800 transition-colors hover:text-orange-950"
          >
            Zpět na hlavní stránku
          </TrackedLink>
          <span className="inline-flex rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Soukromí a měření
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Jaké minimum dat web používá a co naopak nesbírá.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Web je statický a neobsahuje registraci, komentáře ani vlastní formulář. Měření je
            omezené na základní návštěvnost a klíčové kliky, abychom věděli, jestli obsah dává
            lidem smysl a kde se ztrácí.
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Co používáme</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Vercel Web Analytics pro agregované měření návštěvnosti a základních událostí.</li>
              <li>Měříme hlavně návštěvy, scroll depth a kliky na klíčové odkazy nebo CTA.</li>
              <li>Web sám neukládá účet, profil ani vlastní databázi osobních údajů.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Co nepoužíváme</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Žádný newsletter, reklamní pixel ani remarketingovou síť.</li>
              <li>Žádné vložené formuláře třetích stran, chat widget nebo komentářový systém.</li>
              <li>Žádné cílení reklam podle chování na webu.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-border/70 bg-[rgba(248,244,236,0.65)] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Externí služby a jejich role</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">Vercel</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Hosting a analytika běží na infrastruktuře Vercelu. Pokud máš zapnutý blokátor
                skriptů, analytika se nemusí načíst a nic se v takovém případě nesbírá.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">GitHub</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Opravy, připomínky a kontakt vedou přes GitHub issues. Jakmile na GitHub odešleš
                issue nebo pull request, řídí se zpracování jejich podmínkami a zásadami soukromí.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Kontakt k tomuto webu</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Pro připomínky k obsahu nebo ochraně soukromí použij veřejný kontakt přes GitHub issues.
            Pokud projekt později přidá vlastní formulář nebo jiný sběr dat, tato stránka se musí
            doplnit o přesný právní a provozní popis.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackedLink
              href={siteConfig.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="outbound_click"
              eventProperties={{ location: "privacy_contact", target: "issues" }}
              className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Otevřít kontakt
            </TrackedLink>
            <TrackedLink
              href="/metodika"
              eventName="internal_navigation_click"
              eventProperties={{ location: "privacy_contact", target: "methodology" }}
              className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Metodika a transparentnost
            </TrackedLink>
          </div>
        </section>
      </div>
    </main>
  )
}
