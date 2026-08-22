import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { getLeaderProfile, getProgramme, site, team } from "@/lib/content"

/* One programme, one fixed route. If a second programme is ever added this
   becomes /programmes/[slug] — until then a dynamic segment for a single page
   is indirection with no payoff. */
const SLUG = "masterclass"

const programme = getProgramme(SLUG)

export const metadata: Metadata = programme
  ? {
      title: `${programme.name} — ${programme.strapline}`,
      description: programme.summary,
      openGraph: {
        title: `${programme.name} — ${programme.strapline}`,
        description: programme.summary,
        url: `${site.url}/${SLUG}`,
      },
    }
  : {}

export default function MasterclassPage() {
  if (!programme) notFound()

  const host = programme.hostProfileSlug
    ? getLeaderProfile(programme.hostProfileSlug)
    : undefined
  const hostMember = host
    ? team.find((m) => m.profileSlug === host.slug)
    : undefined

  return (
    <>
      <PageHeader
        eyebrow={programme.strapline}
        title={
          <>
            Masterclass with
            <br />
            Dapo Adelegan.
          </>
        }
        lead={programme.summary}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="2xl">
            {/* No fee or account details anywhere on the page — an enquiry opens
                a conversation, and the commercial terms go back privately. */}
            <Link href="/contact?service=Masterclass+enquiry">
              Register your interest
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
          {host ? (
            <Link
              href={`/about/${host.slug}`}
              className="link-rule text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex h-14 items-center px-2 text-base font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              About {host.name}
            </Link>
          ) : null}
        </div>
      </PageHeader>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-20">
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-accent-strong">Modules</span>
              <h2 className="font-display max-w-xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
                What the day covers.
              </h2>

              <ol className="border-border mt-10 border-t">
                {programme.modules.map((module, i) => (
                  <Reveal
                    key={module.title}
                    delay={i * 80}
                    as="li"
                    className="border-border grid gap-3 border-b py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-accent-strong text-lg leading-none font-semibold tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl leading-snug font-semibold">
                        {module.title}
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {module.topics.map((topic) => (
                          <li
                            key={topic}
                            className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="bg-accent-strong mt-2 h-px w-3 shrink-0"
                            />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={140} as="aside" className="flex flex-col gap-10">
              {programme.image ? (
                <figure className="flex flex-col gap-3">
                  {/* The programme's own artwork, shown as an artefact rather
                      than as the source of the curriculum — the modules above
                      are real text so they stay searchable and readable on a
                      phone, and this carries the branding the flyer gives it. */}
                  <div className="border-border overflow-hidden border">
                    <Image
                      src={programme.image.src}
                      alt={programme.image.alt}
                      width={programme.image.width}
                      height={programme.image.height}
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="text-muted-foreground text-xs leading-relaxed">
                    Programme flyer. Dates and fees change per cohort, so they
                    are not shown here.
                  </figcaption>
                </figure>
              ) : null}

              <div className="flex flex-col gap-5">
                <h2 className="eyebrow text-muted-foreground border-border border-t pt-5">
                  How it runs
                </h2>
                <ul className="flex flex-col gap-3">
                  {programme.format.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="bg-accent-strong mt-2 h-px w-3 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {programme.venue ? (
                <div className="flex flex-col gap-4">
                  <h2 className="eyebrow text-muted-foreground border-border border-t pt-5">
                    Venue
                  </h2>
                  <p className="text-sm leading-relaxed">{programme.venue}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dates are set per cohort. Register your interest and
                    we&rsquo;ll send the next sitting, the fee and the booking
                    details.
                  </p>
                </div>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      {host ? (
        <section className="border-border bg-muted/40 border-y py-16 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-center lg:gap-20">
              {hostMember ? (
                <Reveal>
                  <Image
                    src={hostMember.image}
                    alt={`${host.name} photo`}
                    width={1000}
                    height={1333}
                    className="aspect-3/4 w-full max-w-xs object-cover lg:max-w-none"
                  />
                </Reveal>
              ) : null}

              <Reveal delay={120} className="flex flex-col items-start gap-6">
                <span className="eyebrow text-accent-strong">Your host</span>
                <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
                  {host.name}
                </h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  {host.headline}
                </p>
                <Button asChild size="xl" variant="outline">
                  <Link href={`/about/${host.slug}`}>
                    Full profile
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 lg:py-24">
        <Container size="prose" className="flex flex-col gap-10">
          {programme.attribution ? (
            <Reveal className="border-border flex flex-col gap-3 border-t pt-6">
              <h2 className="eyebrow text-muted-foreground">
                On the source material
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {programme.attribution}
              </p>
            </Reveal>
          ) : null}

          <Reveal
            delay={100}
            className="border-border flex flex-col items-start gap-6 border-t pt-10"
          >
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.05] font-semibold">
              Interested in the next cohort?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tell us a little about your business and we&rsquo;ll come back
              with the next sitting, what it costs and how to book.
            </p>
            <Button asChild size="2xl">
              <Link href="/contact?service=Masterclass+enquiry">
                Register your interest
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
