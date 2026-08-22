import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { ContactCta } from "@/components/home/contact-cta"
import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import {
  getLeaderProfile,
  leaderProfiles,
  programmes,
  site,
  team,
} from "@/lib/content"

export function generateStaticParams() {
  return leaderProfiles.map((profile) => ({ slug: profile.slug }))
}

export async function generateMetadata(
  props: PageProps<"/about/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const profile = getLeaderProfile(slug)

  if (!profile) return {}

  return {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    openGraph: {
      title: `${profile.name} — ${profile.role}`,
      description: profile.headline,
      type: "profile",
      url: `${site.url}/about/${profile.slug}`,
    },
  }
}

export default async function LeaderProfilePage(
  props: PageProps<"/about/[slug]">
) {
  const { slug } = await props.params
  const profile = getLeaderProfile(slug)

  if (!profile) notFound()

  /* The portrait lives on the team record rather than being duplicated here, so
     the About grid and this page can never drift apart. */
  const member = team.find((m) => m.profileSlug === profile.slug)

  /* Any programme this person hosts, surfaced as a block near the foot of the
     page. Reads from the programme's own hostProfileSlug so adding a second
     programme needs no change here. */
  const hosted = programmes.filter((p) => p.hostProfileSlug === profile.slug)

  const current = profile.appointments.filter((a) => a.current)
  const past = profile.appointments.filter((a) => !a.current)

  return (
    <>
      <section className="border-border border-b">
        <Container className="pt-12 pb-16 lg:pt-16 lg:pb-20">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground link-rule focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            ← About
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-end lg:gap-16">
            {member ? (
              <Reveal>
                <Image
                  src={member.image}
                  alt={`${profile.name} photo`}
                  width={1000}
                  height={1333}
                  priority
                  className="aspect-3/4 w-full max-w-sm object-cover lg:max-w-none"
                />
              </Reveal>
            ) : null}

            <Reveal delay={110} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="bg-primary h-px w-8 shrink-0" />
                <span className="eyebrow text-accent-strong">Leadership</span>
              </div>

              <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] font-semibold">
                {profile.name}
              </h1>

              <p className="text-accent-strong text-xs font-semibold tracking-wide uppercase">
                {profile.role}
              </p>

              <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">
                {profile.headline}
              </p>
            </Reveal>
          </div>

          <div
            aria-hidden="true"
            className="band-fade mt-14 h-1.5 w-full opacity-70"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              {profile.biography.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={120} as="aside" className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="eyebrow text-muted-foreground border-border border-t pt-5">
                  Education
                </h2>
                <ul className="flex flex-col gap-5">
                  {profile.education.map((entry) => (
                    <li
                      key={`${entry.qualification}-${entry.institution}`}
                      className="flex flex-col gap-1"
                    >
                      <span className="font-display text-base leading-snug font-semibold">
                        {entry.qualification}
                      </span>
                      {/* One expression, not two — adjacent JSX expressions on
                          separate lines get a space between them, which lands
                          in front of the comma. */}
                      <span className="text-muted-foreground text-sm">
                        {`${entry.institution}${entry.year ? `, ${entry.year}` : ""}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="eyebrow text-muted-foreground border-border border-t pt-5">
                  Fellowships &amp; honours
                </h2>
                <ul className="flex flex-col gap-5">
                  {profile.honours.map((honour) => (
                    <li
                      key={`${honour.title}-${honour.awarder ?? ""}`}
                      className="flex flex-col gap-1"
                    >
                      <span className="font-display text-base leading-snug font-semibold">
                        {honour.title}
                      </span>
                      {honour.awarder ? (
                        <span className="text-muted-foreground text-sm">
                          {`${honour.awarder}${honour.year ? `, ${honour.year}` : ""}`}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-border bg-muted/40 border-y py-16 lg:py-24">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">Milestones</span>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              The work that marks the career.
            </h2>
          </Reveal>

          <ol className="border-border mt-14 border-t">
            {profile.milestones.map((milestone, i) => (
              <Reveal
                key={milestone.title}
                delay={i * 80}
                as="li"
                className="border-border grid gap-2 border-b py-7 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8"
              >
                <span className="font-display text-accent-strong text-lg leading-none font-semibold tabular-nums">
                  {milestone.year}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg leading-snug font-semibold">
                    {milestone.title}
                  </h3>
                  {milestone.detail ? (
                    <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                      {milestone.detail}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">Boards &amp; offices</span>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              Where he sits, and for whom.
            </h2>
          </Reveal>

          <ul className="border-border mt-12 grid border-t sm:grid-cols-2">
            {current.map((appointment) => (
              <li
                key={`${appointment.role}-${appointment.org}`}
                className="border-border flex flex-col gap-1 border-b py-5 pr-6"
              >
                <span className="font-display text-base leading-snug font-semibold">
                  {appointment.org}
                </span>
                <span className="text-muted-foreground text-sm">
                  {appointment.role}
                </span>
              </li>
            ))}
          </ul>

          {past.length > 0 ? (
            <div className="mt-12 flex flex-col gap-5">
              <h3 className="eyebrow text-muted-foreground">Previously</h3>
              <ul className="border-border grid border-t sm:grid-cols-2">
                {past.map((appointment) => (
                  <li
                    key={`${appointment.role}-${appointment.org}`}
                    className="border-border text-muted-foreground flex flex-col gap-1 border-b py-5 pr-6"
                  >
                    <span className="text-foreground font-display text-base leading-snug font-semibold">
                      {appointment.org}
                    </span>
                    <span className="text-sm">{appointment.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>

      {hosted.map((programme) => (
        <section
          key={programme.slug}
          className="border-border bg-muted/40 border-y py-16 lg:py-24"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <Reveal className="flex flex-col gap-5">
                <span className="eyebrow text-accent-strong">
                  {programme.strapline}
                </span>
                <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
                  {programme.name}
                </h2>
              </Reveal>

              <Reveal delay={120} className="flex flex-col items-start gap-7">
                <p className="text-muted-foreground leading-relaxed">
                  {programme.summary}
                </p>
                <Button asChild size="xl">
                  <Link href={`/${programme.slug}`}>
                    See the curriculum
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <ContactCta />
    </>
  )
}
