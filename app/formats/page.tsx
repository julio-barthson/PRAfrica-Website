import type { Metadata } from "next"

import { ContactCta } from "@/components/home/contact-cta"
import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { PlacementFigure } from "@/components/site/placement-figure"
import { oohFormats, photographedFormats, site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Out-of-home formats",
  description:
    "Billboards, uni-poles, median and side poles, digital boards, flag poles and campus shelters — the out-of-home inventory PRAfrica buys, builds and verifies across Nigeria.",
  openGraph: {
    title: "Out-of-home formats | PRAfrica",
    description:
      "The out-of-home inventory PRAfrica buys, builds and verifies across Nigeria, by format.",
    url: `${site.url}/formats`,
  },
}

export default function FormatsPage() {
  const totalSites = photographedFormats.reduce(
    (n, format) => n + format.placements.length,
    0
  )

  return (
    <>
      <PageHeader
        eyebrow="Out-of-home"
        title={
          <>
            Every format,
            <br />
            and what it is for.
          </>
        }
        lead="A corridor is not one product. A billboard holds a full proposition, a median run repeats a single claim twenty times in a minute, a campus shelter reaches a student standing still. We buy, build and verify all of it — and photograph what went up."
      >
        <dl className="grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="flex flex-col-reverse gap-1.5">
            <dt className="text-muted-foreground text-sm">Formats</dt>
            <dd className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none font-semibold">
              {oohFormats.length}
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1.5">
            <dt className="text-muted-foreground text-sm">Sites pictured</dt>
            <dd className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none font-semibold">
              {totalSites}
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1.5">
            <dt className="text-muted-foreground text-sm">
              Verification
              <span className="mt-0.5 block text-xs opacity-80">
                dated and geotagged on site
              </span>
            </dt>
            <dd className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none font-semibold">
              GPS
            </dd>
          </div>
        </dl>
      </PageHeader>

      {/* Jump list. With seven formats the page is long, and a visitor who came
          for one of them should not have to scroll past the other six. */}
      <section className="border-border border-b">
        <Container className="py-6">
          <nav aria-label="Formats" className="flex flex-wrap gap-x-6 gap-y-2.5">
            {oohFormats.map((format) => (
              <a
                key={format.slug}
                href={`#${format.slug}`}
                className="link-rule text-muted-foreground hover:text-foreground focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {format.name}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {oohFormats.map((format, i) => {
        const hasPhotos = format.placements.length > 0
        const [lead, ...rest] = format.placements

        return (
          <section
            key={format.slug}
            id={format.slug}
            className={
              i % 2 === 1
                ? "border-border bg-muted/40 border-b py-16 scroll-mt-24 lg:py-24"
                : "border-border border-b py-16 scroll-mt-24 lg:py-24"
            }
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
                <Reveal className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="bg-primary h-px w-8 shrink-0"
                    />
                    <span className="eyebrow text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
                    {format.name}
                  </h2>

                  <p className="font-display text-lg leading-snug font-medium">
                    {format.definition}
                  </p>
                </Reveal>

                <Reveal delay={110} className="flex flex-col gap-7">
                  <p className="text-muted-foreground leading-relaxed">
                    {format.description}
                  </p>

                  <ul className="border-border flex flex-col border-t">
                    {format.strengths.map((strength) => (
                      <li
                        key={strength}
                        className="border-border text-muted-foreground border-b py-3 text-sm leading-relaxed"
                      >
                        {strength}
                      </li>
                    ))}
                  </ul>

                  {!hasPhotos ? (
                    /* Stated capability, no photography yet. Said plainly rather
                       than dressed with a stock image or another format's shot. */
                    <p className="border-border text-muted-foreground border-l-2 pl-4 text-sm leading-relaxed">
                      Sold and installed to order. We hold no site photography of
                      this format yet, so none is shown here — ask and we will
                      send current availability and rates.
                    </p>
                  ) : null}
                </Reveal>
              </div>

              {hasPhotos && lead ? (
                <div className="mt-14 flex flex-col gap-8">
                  <Reveal>
                    <PlacementFigure placement={lead} priority={i === 0} />
                  </Reveal>

                  {rest.length > 0 ? (
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {rest.map((placement, j) => (
                        <Reveal key={placement.src} delay={j * 70} as="li">
                          <PlacementFigure placement={placement} />
                        </Reveal>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </Container>
          </section>
        )
      })}

      <section className="py-16 lg:py-20">
        <Container size="prose">
          <Reveal className="flex flex-col gap-4">
            <h2 className="eyebrow text-muted-foreground">
              About these photographs
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Site photographs are our own monitoring shots, taken on location
              and carrying the date and coordinates they were captured at. We
              leave the stamps on. A campaign you cannot verify went up is a
              campaign you paid for twice, and the record of the posting is part
              of what you are buying.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Campus shelter images show our own structures with indicative
              creative composited on, and are labelled as such — they show the
              inventory available to book, not campaigns already run.
            </p>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
