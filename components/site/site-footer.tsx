import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Wordmark } from "@/components/site/wordmark"
import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <address className="flex flex-col gap-1 text-sm text-muted-foreground not-italic">
              <a
                href={`mailto:${site.contact.email}`}
                className="w-fit link-rule transition-colors hover:text-primary"
              >
                {site.contact.email}
              </a>
              <div className="flex gap-2">
                {site.contact.phone.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="w-fit link-rule transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`https://maps.google.com/?q=${site.contact.address}`}
                target="_blank"
                rel="noreferrer noopener"
                className="w-fit link-rule transition-colors hover:text-primary"
              >
                {site.contact.address}
              </a>
            </address>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-4">
            <h2 className="eyebrow text-muted-foreground">Explore</h2>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit link-rule text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-fit link-rule text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="eyebrow text-muted-foreground">Follow</h2>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex w-fit items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="link-rule">{social.label}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* The signature band, used here as a closing rule. */}
        <div
          aria-hidden="true"
          className="mt-14 h-1.5 w-full band-fade opacity-70"
        />

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="link-rule transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <span>{site.contact.address}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
