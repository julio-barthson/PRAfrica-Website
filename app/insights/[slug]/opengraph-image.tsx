import { notFound } from "next/navigation"

import { getInsight, insights } from "@/lib/content"
import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from "@/lib/og"

export const alt = "PRAfrica insight"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsight(slug)

  if (!insight) notFound()

  return ogCard({
    eyebrow: insight.category,
    title: insight.title,
    meta: `${insight.readingMinutes} min read`,
  })
}
