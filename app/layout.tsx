import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prosím, neplať kartou | Když chceme hotovost nebo převod",
  description:
    "Web vysvětluje, proč část obchodníků dává přednost hotovosti nebo převodu před platbou kartou a proč to samo o sobě neznamená nic nepoctivého.",
  applicationName: "Prosím, neplať kartou",
  openGraph: {
    title: "Prosím, neplať kartou",
    description:
      "Pohled obchodníka na poplatky, čekání na peníze, spory, technické závislosti a další důvody, proč část podniků nechce upřednostňovat platbu kartou.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosím, neplať kartou",
    description:
      "Proč část obchodníků raději bere hotovost nebo převod než platbu kartou.",
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
