import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { testimonials } from "@/lib/content"

export function TestimonialSection() {
  const [primary] = testimonials
  if (!primary) return null

  return (
    <section className="py-20 lg:py-28">
      <Container size="prose">
        <Reveal className="flex flex-col items-center text-center">
          <span aria-hidden="true" className="band-weave h-6 w-24 opacity-80" />

          <figure className="mt-10">
            <blockquote className="font-display text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.25] font-medium text-balance">
              <p>&ldquo;{primary.quote}&rdquo;</p>
            </blockquote>
            {/* The year is not decoration. These are archival endorsement
                letters, and an undated quote reads as a current client
                reference — which would misrepresent what they are. */}
            <figcaption className="text-muted-foreground mt-8 text-sm">
              <span className="text-foreground font-semibold">{primary.name}</span>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              {primary.role}, {primary.company}
              <span className="mt-1 block text-xs opacity-80">
                Letter of endorsement, {primary.year}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
