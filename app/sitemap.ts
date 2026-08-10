import type { MetadataRoute } from "next"

import { caseStudies, insights, site } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }))

  const workRoutes = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }))

  const insightRoutes = insights.map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...workRoutes, ...insightRoutes]
}
