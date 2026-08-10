import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { WorkCard } from "@/components/site/work-card"
import { Button } from "@/components/ui/button"
import { featuredCaseStudies } from "@/lib/content"

/**
 * Asymmetric on purpose: the lead case study gets a split layout and the rest
 * sit in a two-up grid. A uniform grid of three reads as a template; this reads
 * as an edit.
 */
export function FeaturedWork() {
  const [lead, ...rest] = featuredCaseStudies

  return (
    <section className="bg-muted/40 border-border border-y py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Campaigns that
                <br />
                moved a number.
              </>
            }
          />
          <Button asChild size="xl" variant="outline" className="hidden sm:inline-flex">
            <Link href="/work">
              All work
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>

        {lead ? (
          <Reveal className="mt-16">
            <WorkCard study={lead} layout="split" />
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-10">
            {rest.map((study, i) => (
              <Reveal key={study.slug} delay={i * 120}>
                <WorkCard study={study} />
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal className="mt-14 sm:hidden">
          <Button asChild size="xl" variant="outline" className="w-full">
            <Link href="/work">
              All work
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
