import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { site } from "@/lib/content"

import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Send PRAfrica a brief. We reply to every enquiry within two working days with an honest read on whether we're the right team for it.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a project"
        title={
          <>
            Tell us what
            <br />
            you&rsquo;re launching.
          </>
        }
        lead="The more you can tell us about the market and the outcome you need, the more useful our first reply will be."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={120} as="aside" className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <h2 className="eyebrow text-muted-foreground">Direct</h2>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="w-fit link-rule text-sm text-foreground transition-colors hover:text-accent-strong"
                >
                  {site.contact.email}
                </a>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="w-fit link-rule text-sm text-foreground transition-colors hover:text-accent-strong"
                >
                  {site.contact.phone}
                </a>
                <p className="text-sm text-muted-foreground">
                  {site.contact.address}
                </p>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <h2 className="eyebrow text-muted-foreground">
                  What happens next
                </h2>
                <ol className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">1.</span> We
                    read the brief and come back within two working days.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">2.</span> A
                    short call to pressure-test the problem, not a credentials
                    deck.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">3.</span> A
                    scoped proposal, or an honest referral elsewhere if
                    we&rsquo;re the wrong fit.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
