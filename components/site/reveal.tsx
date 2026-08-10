"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Scroll-triggered entrance. Deliberately hand-rolled rather than pulling in an
 * animation library: this is the only motion primitive the site needs, and the
 * audience skews mobile-on-metered-data where a ~30kB dependency is real money.
 *
 * Animates transform + opacity only, unobserves after firing (one-shot), and
 * defers entirely to `prefers-reduced-motion` via the .reveal rules in globals.css.
 */
export function Reveal({
  className,
  delay = 0,
  as: Comp = "div",
  ...props
}: React.ComponentProps<"div"> & {
  delay?: number
  as?: React.ElementType
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    // Reduced motion is handled entirely in CSS (the media query in globals.css
    // forces .reveal visible), so there's no motion branch to take here — which
    // also keeps setState confined to the observer callback.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Comp
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    />
  )
}
