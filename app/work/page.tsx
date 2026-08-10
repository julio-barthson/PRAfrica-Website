import type { Metadata } from "next"

import { Container } from "@/components/site/container"
import { PageHeader } from "@/components/site/page-header"
import { WorkIndex } from "@/components/work/work-index"
import { caseStudies, sectors } from "@/lib/content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected advertising and entertainment campaigns delivered for international and local brands across African markets.",
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Campaigns that
            <br />
            moved a number.
          </>
        }
        lead="Every project below is listed with the outcome it produced, not just the work that was made. Where a number moved, we say by how much."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <WorkIndex studies={caseStudies} sectors={sectors} />
        </Container>
      </section>
    </>
  )
}
