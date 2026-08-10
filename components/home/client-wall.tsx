import { Container } from "@/components/site/container"
import { Reveal } from "@/components/site/reveal"
import { clients } from "@/lib/content"

/**
 * Client wall. Set in type rather than logo images on purpose — until real,
 * cleared logo files exist, a typographic wall is honest and holds the layout.
 * When logos arrive, swap the <li> contents for <Image> and keep the grid.
 */
export function ClientWall() {
  return (
    <section className="border-border bg-muted/40 border-y py-14 lg:py-16">
      <Container>
        <Reveal>
          <h2 className="eyebrow text-muted-foreground text-center">
            Trusted by brands building in Africa
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-foreground/85 text-lg leading-tight font-semibold tracking-tight">
                  {client.name}
                </span>
                <span className="text-muted-foreground text-[0.7rem] tracking-wide uppercase">
                  {client.sector}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
