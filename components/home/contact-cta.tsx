import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/content"

export function ContactCta() {
  return (
    <section className="grain relative overflow-hidden bg-primary text-primary-foreground">
      {/* Warp threads. Thin and irregularly spaced so it reads as woven texture
          rather than evenly-striped awning. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.11]"
      >
        <svg
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          {[
            0, 58, 74, 168, 249, 262, 355, 430, 447, 540, 621, 634, 728, 803,
            820, 915, 996, 1009, 1102, 1178,
          ].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={0}
              width={i % 3 === 0 ? 9 : 3}
              height={500}
              fill="var(--sand)"
            />
          ))}
        </svg>
      </div>

      <Container className="relative py-20 lg:py-28">
        <Reveal className="flex max-w-3xl flex-col gap-8">
          <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] font-semibold">
            Tell us what you&rsquo;re launching.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed opacity-90">
            Send a brief and we&rsquo;ll come back within two working days with
            an honest read, including whether we&rsquo;re the right team for it.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="2xl" variant="secondary">
              <Link href="/contact">
                Start a project
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex h-14 items-center px-2 text-base font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none"
            >
              {site.contact.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
