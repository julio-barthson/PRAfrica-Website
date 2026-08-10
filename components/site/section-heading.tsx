import { cn } from "@/lib/utils"

/**
 * The recurring editorial header: a tracked-out eyebrow with a rule, then the
 * display headline. Using one component for this is what keeps the vertical
 * rhythm identical across every section of the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  align?: "start" | "center"
  className?: string
  as?: "h1" | "h2" | "h3"
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="bg-primary h-px w-8 shrink-0" />
          <span className="eyebrow text-accent-strong">{eyebrow}</span>
        </div>
      ) : null}

      <Heading
        /* `leading-*` MUST come after the `text-[…]` size class here. cn() runs
           tailwind-merge, which reads an arbitrary `text-[length]` as a
           font-size utility — and because Tailwind font-size utilities also set
           line-height, an earlier `leading-*` gets stripped as a conflict. */
        className={cn(
          "font-display text-foreground font-semibold",
          Heading === "h1"
            ? "text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.95]"
            : "text-[clamp(2rem,4.4vw,3.5rem)] leading-[0.98]"
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p
          className={cn(
            "text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}
