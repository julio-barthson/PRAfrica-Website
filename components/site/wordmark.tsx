import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * The company's own mark, lifted from the cover of the 2017 company profile.
 *
 * ⚠️ SOURCE QUALITY — replace when the original artwork surfaces.
 * The profile is a flat image-only PDF whose pages are 450px-wide JPEGs, so the
 * largest instance of the mark in existence here is 235x61. That is enough to
 * render crisply at the ~118px used in the header (2x density) and no larger.
 * Ask the client for the vector original (.ai/.eps/.svg) before this is used at
 * any display size above ~120px, or on print.
 *
 * Two files rather than one CSS filter: the mark is crimson *and* near-black,
 * and the black half is invisible on the dark ground. The dark variant recolours
 * only the neutral, so the crimson stays the brand colour in both themes. They
 * swap on the `.dark` class, which means no hydration flash — the correct one is
 * in the markup from first paint.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/prafrica-logo.png"
        alt="PR Africa International"
        width={235}
        height={61}
        priority
        className="h-[1.9rem] w-auto dark:hidden"
      />
      <Image
        src="/prafrica-logo-dark.png"
        alt=""
        aria-hidden="true"
        width={235}
        height={61}
        /* Eager, but deliberately not `priority`: that would emit a preload for
           a file the current theme is hiding, and only one of these two is ever
           painted. Eager alone is enough to avoid pop-in in the header. */
        loading="eager"
        className="hidden h-[1.9rem] w-auto dark:block"
      />
    </span>
  )
}
