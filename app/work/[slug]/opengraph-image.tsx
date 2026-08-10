import { notFound } from "next/navigation"

import { caseStudies, getCaseStudy } from "@/lib/content"
import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from "@/lib/og"

export const alt = "PRAfrica case study"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  return ogCard({
    eyebrow: study.client,
    title: study.title,
    meta: `${study.sector} · ${study.markets.join(", ")} · ${study.year}`,
  })
}
