# NeplaťKartou.cz

Obsahový web postavený na Next.js 16 a Tailwind CSS. Vysvětluje, proč část obchodníků dává přednost hotovosti nebo převodu před platbou kartou a proč samotná absence terminálu nic automaticky nedokazuje.

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4
- Vercel Web Analytics

## Lokální vývoj

```bash
bun install
bun run dev
```

## Skripty

```bash
bun run check
bun run build
bun run start
```

`check` zůstává oddělený od produkčního buildu. `build` proto nekončí na TypeScript chybách, pokud jsou v `next.config.mjs` záměrně povolené.

## Produkční konfigurace

Nastav před nasazením:

- `NEXT_PUBLIC_SITE_URL`
  Používá se pro canonical URL, `metadataBase`, sitemap a robots. Mělo by jít o finální veřejnou doménu, například `https://neplatkartou.cz`.

## Co je v repu navíc oproti původnímu scaffoldu

- `app/robots.ts` a `app/sitemap.ts`
- `app/manifest.ts`
- `app/opengraph-image.tsx` a `app/twitter-image.tsx`
- `app/metodika/page.tsx`
- `app/soukromi/page.tsx`
- základní security headers v `next.config.mjs`
- custom event tracking pro CTA a scroll depth

## Obsah a důvěryhodnost

- Hlavní argumenty jsou na homepage, podrobnější rozbalené sekce odkazují na zdroje.
- Metodika a transparentnost jsou na `/metodika`.
- Soukromí a měření jsou na `/soukromi`.
- Kontakt a opravy vedou přes GitHub issues, aby byl vidět i kontext změn.

## Nasazení

Projekt je připravený pro Vercel nebo jiný hosting podporující Next.js produkční build.

Na Vercelu:

1. nastav `NEXT_PUBLIC_SITE_URL`
2. zapni Vercel Web Analytics
3. nasaď `bun run build`

## Poznámka k obsahu

Web není právní ani daňové poradenství. Jde o redakčně zpracovaný souhrn zdrojů, regulace a provozních argumentů z pohledu obchodníka.
