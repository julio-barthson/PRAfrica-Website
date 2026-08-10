import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { Wordmark } from "@/components/site/wordmark"
import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/40 border-t">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {site.tagline}
            </p>
            <address className="text-muted-foreground flex flex-col gap-1 text-sm not-italic">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-rule hover:text-foreground w-fit transition-colors"
              >
                {site.contact.email}
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="link-rule hover:text-foreground w-fit transition-colors"
              >
                {site.contact.phone}
              </a>
              <span>{site.contact.address}</span>
            </address>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-4">
            <h2 className="eyebrow text-muted-foreground">Explore</h2>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-rule text-foreground/80 hover:text-foreground w-fit text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="link-rule text-foreground/80 hover:text-foreground w-fit text-sm transition-colors"
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
                className="text-foreground/80 hover:text-foreground group inline-flex w-fit items-center gap-1 text-sm transition-colors"
              >
                <span className="link-rule">{social.label}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* The signature band, used here as a closing rule. */}
        <div aria-hidden="true" className="band-fade mt-14 h-1.5 w-full opacity-70" />

        <div className="text-muted-foreground mt-6 flex flex-col justify-between gap-3 text-xs sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="link-rule hover:text-foreground transition-colors"
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
