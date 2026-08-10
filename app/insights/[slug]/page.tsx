import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { getInsight, insights, site } from "@/lib/content"
import { formatDate } from "@/lib/format"

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const insight = getInsight(slug)

  if (!insight) return {}

  return {
    title: insight.title,
    description: insight.summary,
    openGraph: {
      title: insight.title,
      description: insight.summary,
      type: "article",
      publishedTime: insight.date,
      url: `${site.url}/insights/${insight.slug}`,
    },
  }
}

export default async function InsightPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params
  const insight = getInsight(slug)

  if (!insight) notFound()

  // The body lives beside the metadata as MDX. The static `../../../content/`
  // prefix bounds what gets bundled — only files in that directory are reachable.
  const { default: Article } = await import(`../../../content/insights/${slug}.mdx`)

  return (
    <article>
      <header className="border-border border-b">
        <Container size="prose" className="pt-12 pb-14 lg:pt-16">
          <Link
            href="/insights"
            className="text-muted-foreground hover:text-foreground link-rule focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            ← All insights
          </Link>

          <div className="text-muted-foreground mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="text-accent-strong font-semibold tracking-wide uppercase">
              {insight.category}
            </span>
            <span aria-hidden="true" className="bg-border h-3 w-px" />
            <time dateTime={insight.date}>{formatDate(insight.date)}</time>
            <span aria-hidden="true" className="bg-border h-3 w-px" />
            <span>{insight.readingMinutes} min read</span>
          </div>

          <h1 className="font-display mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-semibold">
            {insight.title}
          </h1>

          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            {insight.summary}
          </p>

          <p className="text-muted-foreground mt-8 text-sm">
            By <span className="text-foreground font-medium">{insight.author}</span>
          </p>
        </Container>
      </header>

      <Container size="prose" className="py-12 lg:py-16">
        <div className="border-border overflow-hidden rounded-sm border">
          <CampaignPlate plate={insight.plate} className="aspect-[21/9]" />
        </div>

        <div className="mt-12">
          <Article />
        </div>

        <div aria-hidden="true" className="band-fade mt-16 h-1.5 w-full opacity-70" />

        <p className="text-muted-foreground mt-8 text-sm">
          Working on something this touches?{" "}
          <Link
            href="/contact"
            className="text-accent-strong link-rule focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            Send us a brief
          </Link>
          .
        </p>
      </Container>
    </article>
  )
}
