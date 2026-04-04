import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.updatedAt)

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/metodika`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/soukromi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
