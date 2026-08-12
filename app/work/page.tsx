import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { WorkIndex } from "@/components/work/work-index"
import { archiveEngagements, publicCaseStudies, sectors } from "@/lib/content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Country branding, airport and outdoor media, trade exhibitions and conference management delivered for governments, agencies and financial institutions.",
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            The Barbican, Heathrow,
            <br />
            OR Tambo, Abuja.
          </>
        }
        lead="Projects are listed with the outcomes we can evidence and no others. Where a figure is not on the record, none is claimed."
      />

      <section className="py-16 lg:py-20">
        <Container>
          {/* Sanitised, not raw: WorkIndex is a client component, so every
              field of whatever is passed here is serialised into the payload. */}
          <WorkIndex studies={publicCaseStudies} sectors={sectors} />
        </Container>
      </section>

      {/* Engagements the record supports but does not detail enough to carry a
          page of their own. Listed so the conference and advocacy side is not
          invisible just because it predates any reporting we hold. */}
      <section className="border-border bg-muted/40 border-t py-16 lg:py-20">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">Also delivered</span>
            <h2 className="font-display max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.02] font-semibold">
              Conferences, forums and roundtables.
            </h2>
          </Reveal>

          <ul className="border-border mt-12 grid gap-x-12 gap-y-10 border-t pt-10 sm:grid-cols-2">
            {archiveEngagements.map((engagement, i) => (
              <Reveal key={engagement.title} delay={(i % 2) * 90} as="li" className="flex flex-col gap-2">
                <span className="text-accent-strong text-xs font-semibold tracking-wide uppercase tabular-nums">
                  {engagement.year}
                </span>
                <h3 className="font-display text-lg leading-tight font-semibold">
                  {engagement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {engagement.detail}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
