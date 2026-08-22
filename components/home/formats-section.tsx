import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { formatShowcase, oohFormats } from "@/lib/content"

/**
 * The out-of-home inventory, one frame per format.
 *
 * Sits directly under the featured work because it answers the question that
 * work raises: those are campaigns, this is the hardware they ran on. Formats
 * without photography are named in the trailing line rather than given an empty
 * card — a gap in a photo grid reads as a broken image, not as a capability.
 */
export function FormatsSection() {
  if (formatShowcase.length === 0) return null

  const [first, ...others] = formatShowcase
  const unphotographed = oohFormats.filter((f) => f.placements.length === 0)

  return (
    <section className="border-border bg-muted/40 border-y py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-primary h-px w-8 shrink-0" />
              <span className="eyebrow text-accent-strong">Out-of-home</span>
            </div>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              A corridor is not one product.
            </h2>
          </Reveal>

          <Reveal delay={110} className="max-w-md">
            <p className="text-muted-foreground leading-relaxed">
              A billboard holds a full proposition. A median run repeats one
              claim twenty times in a minute. A campus shelter reaches a student
              standing still. We buy, build and verify all of it.
            </p>
          </Reveal>
        </div>

        {/* The lead frame runs full width — it is the Viva median run, and it is
            the single most persuasive image in the archive. */}
        {first ? (
          <Reveal delay={150} className="mt-14">
            <Link
              href={`/formats#${first.format.slug}`}
              className="group focus-visible:ring-ring block focus-visible:ring-2 focus-visible:outline-none"
            >
              <div className="border-border overflow-hidden border">
                <Image
                  src={first.lead.src}
                  alt={first.lead.alt}
                  width={first.lead.width}
                  height={first.lead.height}
                  sizes="(min-width: 1024px) 76rem, 100vw"
                  className="max-h-[34rem] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-lg font-semibold">
                  {first.format.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {first.format.definition}
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {others.map(({ format, lead }, i) => (
            <Reveal key={format.slug} delay={i * 80} as="li">
              <Link
                href={`/formats#${format.slug}`}
                className="group focus-visible:ring-ring block focus-visible:ring-2 focus-visible:outline-none"
              >
                <div className="border-border aspect-4/3 overflow-hidden border">
                  <Image
                    src={lead.src}
                    alt={lead.alt}
                    width={lead.width}
                    height={lead.height}
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <span className="font-display mt-3.5 block text-base font-semibold">
                  {format.name}
                </span>
                <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                  {format.definition}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12 flex flex-col items-start gap-5">
          {unphotographed.length > 0 ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              We also build{" "}
              {unphotographed.map((format, i) => (
                <span key={format.slug}>
                  {i > 0 ? " and " : ""}
                  <Link
                    href={`/formats#${format.slug}`}
                    className="link-rule text-foreground hover:text-accent-strong transition-colors"
                  >
                    {format.name.toLowerCase()}
                  </Link>
                </span>
              ))}
              .
            </p>
          ) : null}

          <Button asChild size="xl">
            <Link href="/formats">
              See every format
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
