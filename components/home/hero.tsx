import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { stats } from "@/lib/content"

/**
 * The hero carries the positioning, so it is type-led rather than image-led.
 * That is also the performance answer: no hero video, no LCP image, nothing
 * blocking first paint on a metered mobile connection.
 */
export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      {/* Geometric field — a fine arc fan anchored in the bottom-right corner.
          Kept small, thin and low-contrast on purpose: at display sizes a
          heavy concentric motif stops reading as texture and starts reading as
          a sunset, which is the exact cliché this direction has to avoid. It
          echoes the wordmark's stacked arcs rather than restating them.
          Hidden below `md` where there is simply no room beside the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block"
      >
        <svg
          viewBox="0 0 600 600"
          preserveAspectRatio="xMaxYMax meet"
          className="absolute right-0 bottom-0 h-[78%] w-[38%] opacity-[0.14] dark:opacity-[0.2]"
        >
          {Array.from({ length: 11 }, (_, i) => (
            <circle
              key={i}
              cx={600}
              cy={600}
              r={70 + i * 52}
              fill="none"
              stroke={i % 3 === 0 ? "var(--clay)" : "var(--ochre)"}
              strokeWidth={i % 3 === 0 ? 13 : 5}
            />
          ))}
        </svg>
      </div>

      <Container className="pt-16 pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-4xl">
          <Reveal className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-primary" />
            <span className="eyebrow text-accent-strong">
              Integrated Marketing Communications · Africa
            </span>
          </Reveal>

          <Reveal delay={80}>
            {/* The company's own line since 1999, and better than anything we
                would write for it. */}
            <h1 className="mt-7 font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.92] font-semibold">
              Selling Africa to the world.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              PR Africa International handles country branding, trade and
              investment promotion, public relations and advocacy for public and
              private sector organisations, from Lagos to Heathrow to OR Tambo.
            </p>
          </Reveal>

          <Reveal
            delay={240}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="2xl">
              <Link href="/contact">
                Start a project
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="2xl" variant="outline">
              <Link href="/work">See our work</Link>
            </Button>
          </Reveal>
        </div>

        {/* Signature band, separating the pitch from the proof. */}
        <Reveal
          delay={300}
          aria-hidden="true"
          className="mt-20 h-2 w-full band-fade"
        />

        <Reveal delay={340}>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1.5">
                <dt className="text-sm text-muted-foreground">
                  {stat.label}
                  {stat.note ? (
                    <span className="mt-0.5 block text-xs opacity-80">
                      {stat.note}
                    </span>
                  ) : null}
                </dt>
                <dd className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
