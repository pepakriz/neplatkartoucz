const defaultSiteUrl = "https://neplatkartou.cz"

function normalizeSiteUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value
}

export const siteConfig = {
  name: "Prosím, neplať kartou",
  shortName: "NeplaťKartou.cz",
  homeTitle: "Když chceme hotovost nebo převod",
  description:
    "Web vysvětluje, proč část obchodníků dává přednost hotovosti nebo převodu před platbou kartou a proč to samo o sobě neznamená nic nepoctivého.",
  locale: "cs_CZ",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
  repoUrl: "https://github.com/pepakriz/neplatkartoucz",
  issuesUrl: "https://github.com/pepakriz/neplatkartoucz/issues/new",
  contactUrl: "https://github.com/pepakriz/neplatkartoucz/issues/new",
  ownerName: "Projekt NeplaťKartou.cz",
  updatedAt: "2026-04-04T12:00:00+02:00",
  keywords: [
    "platební karty",
    "hotovost",
    "bezhotovostní platby",
    "poplatky za karty",
    "chargeback",
    "obchodník",
    "terminál",
    "karetní platby",
    "small business",
  ],
} as const

export function formatCzechDate(value: string) {
  return new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long" }).format(new Date(value))
}
