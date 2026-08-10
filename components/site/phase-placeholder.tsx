import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"

/**
 * Stand-in for routes scheduled in Phase 2. It exists purely so that reviewing
 * the homepage doesn't dead-end in a 404 on every nav item — delete each one as
 * its real page lands.
 */
export function PhasePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={description} />
        <div className="mt-10">
          <Button asChild size="xl" variant="outline">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
