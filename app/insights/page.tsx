import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { insights } from "@/lib/content"
import { formatDate } from "@/lib/format"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on advertising, media and entertainment in African markets — from the team running the campaigns.",
}

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date))
  const [lead, ...rest] = sorted

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            What we&rsquo;ve learned
            <br />
            doing the work.
          </>
        }
        lead="Occasional notes on media, strategy and culture in African markets. Written by the people running the campaigns, not a content team."
      />

      <section className="py-16 lg:py-20">
        <Container>
          {lead ? (
            <Reveal>
              <article className="group relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className="border-border overflow-hidden rounded-sm border">
                  <CampaignPlate
                    plate={lead.plate}
                    className="aspect-[16/10] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Meta insight={lead} />
                  <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.05] font-semibold">
                    <Link
                      href={`/insights/${lead.slug}`}
                      className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
                    >
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground max-w-prose leading-relaxed">
                    {lead.summary}
                  </p>
                  <span className="text-foreground mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
                    <span className="link-rule">Read</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ) : null}

          {rest.length > 0 ? (
            <ul className="border-border mt-20 border-t">
              {rest.map((insight, i) => (
                <Reveal key={insight.slug} delay={i * 90} as="li">
                  <article className="group border-border relative flex flex-col gap-3 border-b py-8 lg:flex-row lg:items-baseline lg:gap-10">
                    <div className="lg:w-64 lg:shrink-0">
                      <Meta insight={insight} />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h2 className="font-display text-xl leading-tight font-semibold sm:text-2xl">
                        <Link
                          href={`/insights/${insight.slug}`}
                          className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
                        >
                          {insight.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground max-w-prose text-sm leading-relaxed">
                        {insight.summary}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="text-muted-foreground hidden size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:block"
                      aria-hidden="true"
                    />
                  </article>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </Container>
      </section>
    </>
  )
}

function Meta({ insight }: { insight: (typeof insights)[number] }) {
  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
      <span className="text-accent-strong font-semibold tracking-wide uppercase">
        {insight.category}
      </span>
      <span aria-hidden="true" className="bg-border h-3 w-px" />
      <time dateTime={insight.date}>{formatDate(insight.date)}</time>
      <span aria-hidden="true" className="bg-border h-3 w-px" />
      <span>{insight.readingMinutes} min read</span>
    </div>
  )
}
