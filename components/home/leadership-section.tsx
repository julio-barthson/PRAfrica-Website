import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { leaderProfiles, programmes, team } from "@/lib/content"

/**
 * Who runs the company, and the programme he teaches.
 *
 * Both halves read from the same records the /about/[slug] and /masterclass
 * pages use, so the home page can never quote a credential the profile no
 * longer makes. Renders nothing at all if there is no profile to show — the
 * failure mode for missing content is absence, not an empty band.
 */
export function LeadershipSection() {
  /* Driven by the team record rather than by taking leaderProfiles[0]: the
     person shown here should be whoever the team list links to, not whichever
     profile happens to be authored first. */
  const member = team.find((m) => m.profileSlug)
  const profile = member
    ? leaderProfiles.find((p) => p.slug === member.profileSlug)
    : undefined

  if (!member || !profile) return null

  const programme = programmes.find((p) => p.hostProfileSlug === profile.slug)

  return (
    <section className="border-border border-t py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal>
            <Image
              src={member.image}
              alt={`${profile.name} photo`}
              width={1000}
              height={1333}
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="aspect-3/4 w-full object-cover"
            />
          </Reveal>

          <Reveal delay={110} className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-primary h-px w-8 shrink-0" />
              <span className="eyebrow text-accent-strong">Leadership</span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              {profile.name}
            </h2>

            <p className="text-accent-strong text-xs font-semibold tracking-wide uppercase">
              {profile.role}
            </p>

            <p className="text-muted-foreground max-w-xl leading-relaxed">
              {profile.headline}
            </p>

            {profile.highlights?.length ? (
              <ul className="border-border mt-2 flex w-full flex-col border-t">
                {profile.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border-border text-muted-foreground border-b py-3.5 text-sm leading-relaxed"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}

            <Button asChild size="xl" className="mt-2">
              <Link href={`/about/${profile.slug}`}>
                Full profile
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {programme ? (
          <Reveal delay={180} className="mt-16 lg:mt-20">
            {/* The flyer earns its place here as the programme's own artwork.
                It is a link target rather than decoration, so the whole strip
                is clickable via the stretched pseudo-element on the title. */}
            <div className="group border-border relative flex flex-col gap-6 border p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
              {programme.image ? (
                <div className="border-border w-32 shrink-0 overflow-hidden border sm:w-36">
                  <Image
                    src={programme.image.src}
                    alt={programme.image.alt}
                    width={programme.image.width}
                    height={programme.image.height}
                    sizes="9rem"
                    className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
              ) : null}

              <div className="flex flex-col gap-2.5">
                <span className="eyebrow text-accent-strong">
                  {programme.strapline}
                </span>
                <h3 className="font-display text-xl leading-snug font-semibold sm:text-2xl">
                  <Link
                    href={`/${programme.slug}`}
                    className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {programme.name}
                  </Link>
                </h3>
                <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                  {programme.summary}
                </p>
                <span className="text-accent-strong mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium">
                  See the curriculum
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
