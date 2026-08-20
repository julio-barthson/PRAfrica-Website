import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import {
  caseStudies,
  displayClient,
  getCaseStudy,
  getNextCaseStudy,
  site,
} from "@/lib/content"

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

  /* Metadata is as public as the page body — an uncleared client name would
     leak straight into the <title> and the OG card. */
  const client = displayClient(study)

  return {
    title: `${study.title} | ${client}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | ${client}`,
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

  /* The card image leads the gallery so the shot a visitor clicked through from
     is the first one they see here, with `gallery` carrying the rest. */
  const gallery = [
    ...(study.image ? [study.image] : []),
    ...(study.gallery ?? []),
  ]

  return (
    <article>
      <header className="border-b border-border">
        <Container className="pt-12 pb-14 lg:pt-16 lg:pb-16">
          <Link
            href="/work"
            className="link-rule text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-semibold tracking-wide text-accent-strong uppercase">
              {displayClient(study)}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span className="text-muted-foreground">{study.sector}</span>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span className="text-muted-foreground">{study.year}</span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] font-semibold">
            {study.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {study.summary}
          </p>
        </Container>
      </header>

      <Container className="py-14 lg:py-16">
        {/* Photography replaces the generated banner outright rather than
            sitting under it: a stand-in plate above real campaign photos is the
            page announcing it had no pictures, directly above the pictures.

            The grid stays two-up instead of leading on a full-width hero. The
            recovered files are ~410px wide, so spanning the container would
            upscale them four-fold — the one thing this imagery cannot survive. */}
        {gallery.length > 0 ? (
          <Reveal>
            <section>
              <h2 className="eyebrow text-muted-foreground">On site</h2>
              {/* Two up, capped: at ~410px source these are sharp in a half
                  column and soft in a full one. */}
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {gallery.map((shot) => (
                  <li
                    key={shot.src}
                    className="relative aspect-[3/2] overflow-hidden rounded-sm border border-border"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(min-width: 640px) 420px, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Campaign photography recovered from the company profile archive.
              </p>
            </section>
          </Reveal>
        ) : (
          /* Nothing was shot for this project, so the plate is doing real work
             as art direction rather than standing in for something better. */
          <div className="overflow-hidden rounded-sm border border-border">
            <CampaignPlate plate={study.plate} className="aspect-[21/9]" />
          </div>
        )}

        {/* Results promoted above the narrative: a buyer scanning this page is
            looking for the number before they commit to reading the story.
            Omitted entirely where the archive holds no reported outcome — the
            band's own rules would otherwise frame an empty strip. */}
        {study.results.length > 0 ? (
          <Reveal>
            <dl className="mt-14 grid gap-10 border-y border-border py-10 sm:grid-cols-3">
              {study.results.map((result) => (
                <div key={result.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-sm text-muted-foreground">
                    {result.label}
                  </dt>
                  <dd className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none font-semibold">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-12">
            <Section title="The challenge" body={study.narrative.challenge} />
            <Section title="What we did" body={study.narrative.approach} />
            <Section title="The outcome" body={study.narrative.outcome} />

            {study.quote ? (
              <figure className="mt-2 border-l-2 border-primary pl-6">
                <blockquote className="font-display text-xl leading-snug font-medium text-balance sm:text-2xl">
                  <p>&ldquo;{study.quote.text}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {study.quote.name}
                  </span>
                  {", "}
                  {/* `org` carries the endorsing body where that is not the
                      commissioning client — a ministry or a secretariat. */}
                  {study.quote.role}, {study.quote.org ?? displayClient(study)}
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
        <section className="border-t border-border bg-muted/40">
          <Container className="py-16 lg:py-20">
            <span className="eyebrow text-accent-strong">Next project</span>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.02] font-semibold">
                <Link
                  href={`/work/${next.slug}`}
                  className="rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {next.title}
                </Link>
              </h2>
              <Button asChild size="xl" variant="outline">
                <Link href={`/work/${next.slug}`}>
                  {displayClient(next)}
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
      <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
    </section>
  )
}

function Meta({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-5">
      <h2 className="eyebrow text-muted-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
