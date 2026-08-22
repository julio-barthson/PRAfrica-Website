import Image from "next/image"

import type { OohPlacement } from "@/lib/content"

/**
 * One installed site: the photograph, who is on it, where it stands and when it
 * was verified.
 *
 * The caption carries the capture date in text as well as leaving it burned
 * into the frame — the stamp is small on a phone and unreadable to a screen
 * reader, and the date is the whole point of a monitoring photograph.
 */
export function PlacementFigure({
  placement,
  priority,
}: {
  placement: OohPlacement
  priority?: boolean
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="border-border bg-muted/40 relative overflow-hidden border">
        <Image
          src={placement.src}
          alt={placement.alt}
          width={placement.width}
          height={placement.height}
          priority={priority}
          sizes={
            priority
              ? "(min-width: 1024px) 76rem, 100vw"
              : "(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 100vw"
          }
          className="h-auto w-full"
        />

        {placement.indicative ? (
          /* Labelled on the image itself, not only in the caption. A composite
             that reads as a delivered campaign is a misrepresentation, and a
             caption is easy to scroll past. */
          <span className="bg-background/90 text-muted-foreground absolute top-3 left-3 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide uppercase backdrop-blur-sm">
            Indicative creative
          </span>
        ) : null}
      </div>

      <figcaption className="flex flex-col gap-1">
        <span className="font-display text-base leading-snug font-semibold">
          {placement.client}
        </span>
        <span className="text-muted-foreground text-sm">
          {placement.location}
        </span>
        {placement.captured ? (
          <span className="text-muted-foreground text-xs opacity-80">
            Verified on site, {placement.captured}
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}
