import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { CampaignPlate } from "@/components/site/campaign-plate"
import type { CaseStudy } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * A case study card.
 *
 * The whole card is clickable via a stretched pseudo-element on the title link
 * rather than by wrapping everything in an anchor — that keeps exactly one link
 * in the accessibility tree with the title as its name, instead of a single
 * anchor whose label is the entire card's text content.
 */
export function WorkCard({
  study,
  layout = "stacked",
  className,
}: {
  study: CaseStudy
  layout?: "stacked" | "split"
  className?: string
}) {
  const isSplit = layout === "split"

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-6",
        isSplit && "lg:grid lg:grid-cols-2 lg:items-center lg:gap-14",
        className
      )}
    >
      <div className="border-border overflow-hidden rounded-sm border">
        <CampaignPlate
          plate={study.plate}
          className={cn(
            "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]",
            isSplit ? "aspect-[4/3]" : "aspect-[3/2]"
          )}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="text-accent-strong font-semibold tracking-wide uppercase">
            {study.client}
          </span>
          <span aria-hidden="true" className="bg-border h-3 w-px" />
          <span>{study.sector}</span>
          <span aria-hidden="true" className="bg-border h-3 w-px" />
          <span>{study.year}</span>
        </div>

        <h3
          /* Size class first, then leading — see the note in section-heading.tsx:
             tailwind-merge drops a `leading-*` that precedes a font-size class. */
          className={cn(
            "font-display font-semibold tracking-tight",
            isSplit
              ? "text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.05]"
              : "text-2xl leading-[1.12]"
          )}
        >
          <Link
            href={`/work/${study.slug}`}
            className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:outline-none"
          >
            {study.title}
          </Link>
        </h3>

        <p className="text-muted-foreground max-w-prose text-sm leading-relaxed sm:text-base">
          {study.summary}
        </p>

        <dl
          className={cn(
            "border-border mt-2 grid grid-cols-3 gap-4 border-t pt-5",
            isSplit && "max-w-lg"
          )}
        >
          {study.results.map((result) => (
            /* col-reverse so the value reads first visually while the DOM keeps
               the required dt-then-dd order. */
            <div key={result.label} className="flex flex-col-reverse gap-1">
              <dt className="text-muted-foreground text-[0.7rem] leading-snug">
                {result.label}
              </dt>
              <dd className="font-display text-foreground text-2xl leading-none font-semibold sm:text-3xl">
                {result.value}
              </dd>
            </div>
          ))}
        </dl>

        <span className="text-foreground mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
          <span className="link-rule">View case study</span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  )
}
