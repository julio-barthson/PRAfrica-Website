import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import { capabilities, type Division } from "@/lib/content"

const DIVISIONS: { id: Division; label: string; blurb: string }[] = [
  {
    id: "branding",
    label: "Branding & Media",
    blurb:
      "Bought visibility — country branding, airport and outdoor placement, and the sponsors who fund it.",
  },
  {
    id: "communications",
    label: "Communications",
    blurb:
      "Earned standing — press, advocacy, trade promotion and the conferences that convene the room.",
  },
]

/**
 * The two halves of the business are genuinely different sales conversations,
 * so they get visually separated columns rather than one undifferentiated list
 * of services.
 */
export function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Attention you buy,
                <br />
                standing you earn.
              </>
            }
            lead="Most mandates need both — a placement that puts you in front of the right audience, and the press and advocacy that make you worth finding there. We run them out of the same room."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {DIVISIONS.map((division, dIndex) => (
            <Reveal
              key={division.id}
              delay={dIndex * 120}
              className="border-border flex flex-col border-t pt-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="eyebrow text-accent-strong tabular-nums">
                  0{dIndex + 1}
                </span>
                <h3 className="font-display text-3xl leading-none font-semibold tracking-tight">
                  {division.label}
                </h3>
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {division.blurb}
              </p>

              <ul className="mt-9 flex flex-col gap-9">
                {capabilities
                  .filter((c) => c.division === division.id)
                  .map((capability) => (
                    <li key={capability.title} className="flex flex-col gap-2.5">
                      <h4 className="text-foreground text-base font-semibold">
                        {capability.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {capability.description}
                      </p>
                      <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-2">
                        {capability.offerings.map((offering) => (
                          <li
                            key={offering}
                            className="border-border text-muted-foreground rounded-sm border px-2.5 py-1 text-xs"
                          >
                            {offering}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16">
          <Button asChild size="xl" variant="outline">
            <Link href="/services">
              All services
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
