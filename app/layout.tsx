import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Neplať kartou, prosím",
  description:
    "Web vysvětluje, proč obchodníci někdy dávají přednost hotovosti, bankovnímu převodu nebo bitcoinu před platbou kartou.",
  applicationName: "Neplať kartou, prosím",
  openGraph: {
    title: "Neplať kartou, prosím",
    description:
      "Pohled obchodníka na poplatky, čekání na peníze, spory a další důvody, proč část prodejců nechce upřednostňovat platbu kartou.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neplať kartou, prosím",
    description:
      "Proč část obchodníků raději bere hotovost, převod nebo bitcoin než platbu kartou.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body
        className="antialiased"
        style={{ fontFamily: '"Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
