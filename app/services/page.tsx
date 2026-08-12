import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ContactCta } from "@/components/home/contact-cta"
import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { capabilities, engagementSteps, type Division } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Country branding, global outdoor and airport media, sponsorship, public relations, trade and investment promotion, political advocacy and conference management.",
}

const DIVISIONS: { id: Division; label: string; blurb: string }[] = [
  {
    id: "branding",
    label: "Branding & Media",
    blurb:
      "Bought visibility. Country branding platforms, high-value placement in international hubs and on home-market corridors, and the sponsorship that funds both.",
  },
  {
    id: "communications",
    label: "Communications",
    blurb:
      "Earned standing. Press and publicity, political advocacy, trade and investment promotion, and the multi-day conferences that put the right people in one room.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title={
          <>
            Attention you buy,
            <br />
            standing you earn.
          </>
        }
        lead="Most mandates need both — a placement that puts you in front of the right audience, and the press and advocacy that make you worth finding there. Running them separately is how the two end up contradicting each other."
      />

      {DIVISIONS.map((division, dIndex) => (
        <section
          key={division.id}
          className={dIndex % 2 === 1 ? "bg-muted/40 border-border border-y" : ""}
        >
          <Container className="py-16 lg:py-24">
            <Reveal className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="eyebrow text-accent-strong tabular-nums">
                  0{dIndex + 1}
                </span>
                <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-none font-semibold">
                  {division.label}
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                {division.blurb}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-12 md:grid-cols-2 lg:gap-x-16">
              {capabilities
                .filter((c) => c.division === division.id)
                .map((capability, i) => (
                  <Reveal
                    key={capability.title}
                    delay={(i % 2) * 100}
                    className="border-border flex flex-col gap-3 border-t pt-6"
                  >
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {capability.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {capability.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="border-border text-muted-foreground rounded-sm border px-2.5 py-1 text-xs"
                        >
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">How we work</span>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              What an engagement actually looks like.
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {engagementSteps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 90}
                as="li"
                className="border-border flex flex-col gap-3 border-t pt-6"
              >
                <span className="eyebrow text-accent-strong tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl leading-tight font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-14">
            <Button asChild size="xl" variant="outline">
              <Link href="/work">
                See the work this produces
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
