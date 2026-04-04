import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import { siteConfig } from "@/lib/site"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.homeTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: siteConfig.ownerName,
      url: siteConfig.repoUrl,
    },
  ],
  creator: siteConfig.ownerName,
  publisher: siteConfig.ownerName,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    type: "website",
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
