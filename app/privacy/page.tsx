import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { site } from "@/lib/content"
import { formatDate } from "@/lib/format"

/**
 * ⚠️ DRAFT — HAS NOT BEEN REVIEWED BY A LAWYER.
 *
 * The technical statements below are accurate to what this codebase actually
 * does (see the notes against each section). The legal framing, the retention
 * period and the controller details are a reasonable starting point, not advice.
 * Two things must be confirmed before launch:
 *
 *   1. The retention period stated in "How long we keep it" has to match what
 *      PRAfrica actually does with enquiries. It is currently an assumption.
 *   2. NDPA registration status and the registered company address need to be
 *      filled in — a data controller of any significance in Nigeria may need to
 *      register with the NDPC.
 *
 * Keep this page in step with the code. If analytics, a cookie, an email
 * newsletter or a third-party embed is ever added, this page is wrong until it
 * is updated.
 */

const LAST_UPDATED = "2026-08-09"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How PRAfrica collects, uses and protects personal data submitted through this website.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy notice"
        lead={`How we handle personal data submitted through this website. Last updated ${formatDate(LAST_UPDATED)}.`}
      />

      <Container size="prose" className="py-14 lg:py-20">
        <Section title="Who we are">
          <P>
            {site.legalName} (&ldquo;we&rdquo;) operates this website and is the
            data controller for personal data submitted through it. You can reach
            us at{" "}
            <A href={`mailto:${site.contact.email}`}>{site.contact.email}</A> or{" "}
            <A href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
              {site.contact.phone}
            </A>
            .
          </P>
        </Section>

        <Section title="What we collect">
          <P>
            <strong className="text-foreground font-semibold">
              Information you give us.
            </strong>{" "}
            When you submit a brief through our contact form we collect your name,
            email address, and — where you choose to provide them — your company,
            the service you are interested in, your budget range, your timeline,
            the markets you are asking about, and the contents of your brief.
          </P>
          <P>
            <strong className="text-foreground font-semibold">
              Information collected automatically.
            </strong>{" "}
            When you submit the form we briefly process your IP address in order
            to limit how many submissions can be made in quick succession. It is
            held in memory only, for around a minute, and is not written to a
            database or included in the email we receive. Our hosting provider
            will also keep standard server logs, which may include your IP
            address and browser type.
          </P>
          <P>
            We do not ask for, and ask that you do not send us, sensitive
            personal data — health information, government identifiers, or
            financial account details.
          </P>
        </Section>

        <Section title="Why we use it">
          <P>
            We use the information in your brief for one purpose: to respond to
            your enquiry and, if it goes further, to scope and discuss the work.
            We do not use it for marketing, we do not build profiles from it, and
            we do not sell it. The lawful basis is our legitimate interest in
            responding to people who contact us about our services, and — where
            you become a client — the performance of a contract.
          </P>
          <P>
            Your IP address is processed on the basis of our legitimate interest
            in keeping the form from being abused.
          </P>
        </Section>

        <Section title="Who else sees it">
          <P>
            Your brief is delivered to us by email through{" "}
            <A href="https://www.mailjet.com/" external>
              Mailjet
            </A>
            , an email delivery service operated by Sinch, acting as our
            processor. It reaches our own inbox and is read by the people at
            PRAfrica who need to respond to it.
          </P>
          <P>
            Beyond our email provider and our hosting provider, we do not share
            your information with third parties, unless we are required to by law.
          </P>
        </Section>

        <Section title="Where it goes">
          <P>
            We operate across African markets and work with clients
            internationally, and our service providers may process data outside
            your country of residence. Where personal data is transferred out of
            Nigeria, the EEA or the UK, we rely on the transfer mechanisms our
            providers have in place, including standard contractual clauses.
          </P>
        </Section>

        <Section title="How long we keep it">
          <P>
            We keep enquiries for as long as we may reasonably need them to
            respond and to maintain a record of the conversation — normally up to
            24 months from your last contact with us, after which they are
            deleted. If you become a client, we keep records for as long as the
            relationship lasts and for any period we are legally required to
            afterwards.
          </P>
          <P>
            You can ask us to delete your enquiry sooner at any time, and we will
            do so unless we are required to keep it.
          </P>
        </Section>

        <Section title="Cookies and tracking">
          <P>
            <strong className="text-foreground font-semibold">
              This site sets no cookies.
            </strong>{" "}
            We run no analytics, no advertising pixels, and no third-party
            trackers, which is why you have not been asked to accept anything.
          </P>
          <P>
            The only thing we store on your device is your light or dark theme
            preference, kept in your browser&rsquo;s local storage so the site
            does not change appearance between visits. It never leaves your
            browser, and clearing your browsing data removes it.
          </P>
        </Section>

        <Section title="Your rights">
          <P>
            Depending on where you live, you have rights over your personal data
            under the Nigeria Data Protection Act 2023 and, if you are in the EEA
            or the UK, under the GDPR. These include the right to ask for a copy
            of the data we hold about you, to have it corrected or deleted, to
            object to or restrict how we use it, and to ask us to transfer it
            elsewhere.
          </P>
          <P>
            To exercise any of these, email us at{" "}
            <A href={`mailto:${site.contact.email}`}>{site.contact.email}</A>. We
            will respond within one month. If you are unhappy with our response,
            you can complain to the Nigeria Data Protection Commission, or to your
            local supervisory authority if you are in the EEA or the UK.
          </P>
        </Section>

        <Section title="Changes to this notice">
          <P>
            If we change how we handle personal data — for example, if we add
            analytics or an email newsletter — we will update this page and change
            the date at the top of it.
          </P>
        </Section>

        <div aria-hidden="true" className="band-fade mt-14 h-1.5 w-full opacity-70" />

        <p className="text-muted-foreground mt-8 text-sm">
          Questions about any of this?{" "}
          <Link
            href="/contact"
            className="text-accent-strong link-rule focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            Get in touch
          </Link>
          .
        </p>
      </Container>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] leading-tight font-semibold">
        {title}
      </h2>
      {children}
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground mt-4 leading-relaxed">{children}</p>
}

function A({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="text-accent-strong link-rule focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
    >
      {children}
    </a>
  )
}
