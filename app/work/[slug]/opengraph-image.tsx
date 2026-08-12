import { notFound } from "next/navigation"

import { caseStudies, displayClient, getCaseStudy } from "@/lib/content"
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
    /* Social cards are the most widely redistributed surface on the site, so
       the clearance check matters more here than anywhere. */
    eyebrow: displayClient(study),
    title: study.title,
    meta: `${study.sector} · ${study.markets.join(", ")} · ${study.year}`,
  })
}
