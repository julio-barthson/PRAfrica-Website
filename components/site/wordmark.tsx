import { cn } from "@/lib/utils"

/**
 * Typographic lockup. The mark is a stacked-arc glyph — the same geometry as the
 * "arc" campaign plate, so the identity and the artwork share a vocabulary.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 24 24"
        className="size-6 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M2 22a10 10 0 0 1 20 0Z" fill="var(--clay)" />
        <path d="M6.5 22a5.5 5.5 0 0 1 11 0Z" fill="var(--ochre)" />
        <rect x="2" y="2" width="20" height="3" fill="var(--clay)" />
        <rect x="2" y="8" width="12" height="3" fill="var(--ochre)" />
      </svg>
      <span className="font-display text-[1.35rem] leading-none font-semibold tracking-tight">
        PRAfrica
      </span>
    </span>
  )
}
