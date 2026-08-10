import type { Metadata } from "next"

import { ContactCta } from "@/components/home/contact-cta"
import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { markets, stats, team } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description:
    "PRAfrica is an advertising and entertainment company operating across African markets, with in-country teams and a bias for work that moves a number.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            We operate here.
            <br />
            That is the difference.
          </>
        }
        lead="Plenty of agencies can present a strategy for Africa. Far fewer can staff a twelve-city tour, clear a permit in three markets, or tell you which of your assumptions will not survive contact with the ground."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.05] font-semibold">
                One team, two disciplines, fourteen markets.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PRAfrica was built around a straightforward observation: brands
                entering African markets were being sold either continental
                strategy with no execution capacity, or local execution with no
                strategic spine. Both fail, in different and expensive ways.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We run advertising and entertainment out of the same operating
                team, in-market, with people who live in the territories the work
                runs in. That means our media plans are negotiated by people who
                know the stations, and our events are produced by people who know
                which permits actually take six weeks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also tell clients when their brief is the wrong one. It has
                cost us pitches. It has kept every client relationship we care
                about.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-1.5">
                    <dt className="text-muted-foreground text-sm">
                      {stat.label}
                      {stat.note ? (
                        <span className="mt-0.5 block text-xs opacity-80">
                          {stat.note}
                        </span>
                      ) : null}
                    </dt>
                    <dd className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-semibold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-border bg-muted/40 border-y py-16 lg:py-24">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">The team</span>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              The people you will actually be working with.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 90} as="li" className="flex flex-col gap-4">
                {/* Replace with real photography first — this is the page where
                    generated artwork is weakest, because people buy people. */}
                <div className="border-border overflow-hidden rounded-sm border">
                  <CampaignPlate plate={member.plate} className="aspect-[4/5]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg leading-tight font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-accent-strong text-xs font-semibold tracking-wide uppercase">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-accent-strong">Where we work</span>
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.02] font-semibold">
              In-country teams and standing partners.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <ul className="border-border mt-12 grid grid-cols-2 border-t sm:grid-cols-3 lg:grid-cols-4">
              {markets.map((market) => (
                <li
                  key={market}
                  className="border-border font-display border-b px-1 py-5 text-lg font-semibold tracking-tight"
                >
                  {market}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
