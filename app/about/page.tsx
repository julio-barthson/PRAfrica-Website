import type { Metadata } from "next"

import { ContactCta } from "@/components/home/contact-cta"
import { CampaignPlate } from "@/components/site/campaign-plate"
import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { markets, partners, stats, team } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description:
    "PR Africa International is an integrated marketing communications company, established to handle public and media relations for private and public sector organisations across Africa.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            The wealth of a nation
            <br />
            is its perceived value.
          </>
        }
        lead="PR Africa International was established to initiate, execute and handle public and media relations for private and public sector organisations across Africa — on the premise that how a country is understood abroad is an economic asset, not a vanity one."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.05] font-semibold">
                Persuade, translate, transform, inform.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are one of the leading integrated marketing communications
                companies in Nigeria, established to initiate, execute and handle
                public and media relations for private and public sector
                organisations across Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We recognise that the wealth of modern nations is fast emerging
                as their perceived value. That is why the power to persuade,
                translate, transform, inform, inspire and educate sits at the
                centre of how we work — and why our record runs from trade
                exhibitions at the Barbican to arrivals halls at Heathrow and OR
                Tambo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing clients with state-of-the-art
                expertise in our business processes and innovative activities
                that directly support the management of their public image and
                corporate aspiration.
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

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 90} as="li" className="flex flex-col gap-4">
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
                  {member.bio ? (
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  ) : null}
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
              Delivered work, and the partners behind it.
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

          {/* Named explicitly rather than folded into the market list. The
              London and New York presence is a partner relationship, and a
              website that lets it read as an owned office is making a claim the
              company cannot support. */}
          <Reveal delay={160} className="mt-12 flex flex-col gap-5">
            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
              Work is delivered in-market from Lagos. Our reach into London and
              New York runs through standing international partners:
            </p>
            <ul className="flex flex-col gap-4 sm:flex-row sm:gap-12">
              {partners.map((partner) => (
                <li key={partner.name} className="flex flex-col gap-1">
                  <span className="font-display text-base font-semibold">
                    {partner.name}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {partner.location}
                  </span>
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
