import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { caseStudies, getCaseStudy, getNextCaseStudy, site } from "@/lib/content"

/** Prerender every case study at build time — the set is known and static. */
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const study = getCaseStudy(slug)

  if (!study) return {}

  return {
    title: `${study.title} — ${study.client}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} — ${study.client}`,
      description: study.summary,
      type: "article",
      url: `${site.url}/work/${study.slug}`,
    },
  }
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  const next = getNextCaseStudy(slug)

  return (
    <article>
      <header className="border-border border-b">
        <Container className="pt-12 pb-14 lg:pt-16 lg:pb-16">
          <Link
            href="/work"
            className="text-muted-foreground hover:text-foreground link-rule focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="text-accent-strong font-semibold tracking-wide uppercase">
              {study.client}
            </span>
            <span aria-hidden="true" className="bg-border h-3 w-px" />
            <span className="text-muted-foreground">{study.sector}</span>
            <span aria-hidden="true" className="bg-border h-3 w-px" />
            <span className="text-muted-foreground">{study.year}</span>
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] font-semibold">
            {study.title}
          </h1>

          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-relaxed">
            {study.summary}
          </p>
        </Container>
      </header>

      <Container className="py-14 lg:py-16">
        <div className="border-border overflow-hidden rounded-sm border">
          <CampaignPlate plate={study.plate} className="aspect-[21/9]" />
        </div>

        {/* Results promoted above the narrative: a buyer scanning this page is
            looking for the number before they commit to reading the story. */}
        <Reveal>
          <dl className="border-border mt-14 grid gap-10 border-y py-10 sm:grid-cols-3">
            {study.results.map((result) => (
              <div key={result.label} className="flex flex-col-reverse gap-2">
                <dt className="text-muted-foreground text-sm">{result.label}</dt>
                <dd className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none font-semibold">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-12">
            <Section title="The challenge" body={study.narrative.challenge} />
            <Section title="What we did" body={study.narrative.approach} />
            <Section title="The outcome" body={study.narrative.outcome} />

            {study.quote ? (
              <figure className="border-primary mt-2 border-l-2 pl-6">
                <blockquote className="font-display text-xl leading-snug font-medium text-balance sm:text-2xl">
                  <p>&ldquo;{study.quote.text}&rdquo;</p>
                </blockquote>
                <figcaption className="text-muted-foreground mt-4 text-sm">
                  <span className="text-foreground font-semibold">{study.quote.name}</span>
                  {", "}
                  {study.quote.role}, {study.client}
                </figcaption>
              </figure>
            ) : null}
          </Reveal>

          <Reveal delay={100} as="aside" className="flex flex-col gap-10">
            <Meta title="Markets" items={study.markets} />
            <Meta title="Services" items={study.services} />
            <Meta title="Delivered" items={study.deliverables} />
          </Reveal>
        </div>
      </Container>

      {next ? (
        <section className="border-border bg-muted/40 border-t">
          <Container className="py-16 lg:py-20">
            <span className="eyebrow text-accent-strong">Next project</span>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <h2 className="font-display max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-[1.02] font-semibold">
                <Link
                  href={`/work/${next.slug}`}
                  className="focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                >
                  {next.title}
                </Link>
              </h2>
              <Button asChild size="xl" variant="outline">
                <Link href={`/work/${next.slug}`}>
                  {next.client}
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  )
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-2xl leading-tight font-semibold sm:text-3xl">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-prose text-base leading-relaxed">{body}</p>
    </section>
  )
}

function Meta({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-border flex flex-col gap-3 border-t pt-5">
      <h2 className="eyebrow text-muted-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-foreground/85 text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
