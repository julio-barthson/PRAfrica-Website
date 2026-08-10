import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

/**
 * Masthead for interior pages. Keeps the h1 treatment and the band identical
 * across Work, Services, About and Insights so the pages feel like one site.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="border-border border-b">
      <Container className="pt-14 pb-16 lg:pt-20 lg:pb-20">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
        {children ? <div className="mt-10">{children}</div> : null}
        <div aria-hidden="true" className="band-fade mt-12 h-1.5 w-full opacity-70" />
      </Container>
    </section>
  )
}
