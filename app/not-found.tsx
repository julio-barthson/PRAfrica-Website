import Link from "next/link"

import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="404"
          title="That page has moved on."
          lead="The link may be out of date, or the page may never have existed. Either way, the work is this way."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/work">See our work</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
