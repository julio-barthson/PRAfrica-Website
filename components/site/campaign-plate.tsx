import type { Plate } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * Generated artwork that stands in for campaign photography.
 *
 * Real imagery is not available yet, and dropping in stock photos or remote
 * placeholder services would (a) misrepresent the work and (b) put the layout on
 * a network dependency we're specifically trying to avoid. These plates are
 * inline SVG built from the brand palette: a few hundred bytes, no requests, and
 * they read as intentional art direction rather than a broken image.
 *
 * Swapping in a real photo later means replacing this one component call with
 * <Image>; nothing else in the card changes.
 *
 * Colours reference brand CSS vars, so plates re-tone themselves in dark mode.
 */

const TONES: Record<Plate["tone"], { bg: string; mark: string; alt: string }> = {
  clay: { bg: "var(--sand-deep)", mark: "var(--clay)", alt: "var(--ochre)" },
  ochre: { bg: "var(--sand-deep)", mark: "var(--ochre)", alt: "var(--clay)" },
  deep: { bg: "var(--clay-deep)", mark: "var(--ochre)", alt: "var(--sand)" },
  sand: { bg: "var(--sand)", mark: "var(--clay)", alt: "var(--clay-deep)" },
}

function Arc({ mark, alt }: { mark: string; alt: string }) {
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx={400}
          cy={620}
          r={90 + i * 88}
          fill="none"
          stroke={i % 2 === 0 ? mark : alt}
          strokeWidth={i % 2 === 0 ? 34 : 12}
          opacity={i % 2 === 0 ? 0.95 : 0.7}
        />
      ))}
      <circle cx={400} cy={620} r={54} fill={alt} />
    </g>
  )
}

function Weave({ mark, alt }: { mark: string; alt: string }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`h${i}`} x={0} y={70 + i * 108} width={800} height={44} fill={mark} opacity={0.9} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={`v${i}`}
          x={44 + i * 112}
          y={0}
          width={i % 2 === 0 ? 30 : 14}
          height={600}
          fill={alt}
          opacity={i % 2 === 0 ? 0.85 : 0.6}
        />
      ))}
    </g>
  )
}

function Column({ mark, alt }: { mark: string; alt: string }) {
  const widths = [58, 26, 96, 14, 44, 120, 30, 70]
  let x = 40
  return (
    <g>
      {widths.map((w, i) => {
        const rect = (
          <rect
            key={i}
            x={x}
            y={i % 3 === 0 ? 0 : 90 - i * 6}
            width={w}
            height={600}
            fill={i % 3 === 1 ? alt : mark}
            opacity={i % 4 === 2 ? 0.55 : 1}
          />
        )
        x += w + 26
        return rect
      })}
      <rect x={0} y={430} width={800} height={16} fill={alt} />
    </g>
  )
}

function Eclipse({ mark, alt }: { mark: string; alt: string }) {
  return (
    <g>
      <circle cx={330} cy={290} r={210} fill={mark} />
      <circle cx={500} cy={290} r={210} fill={alt} opacity={0.82} />
      <rect x={0} y={272} width={800} height={22} fill={mark} opacity={0.65} />
      <circle cx={415} cy={290} r={62} fill="var(--sand-deep)" opacity={0.5} />
    </g>
  )
}

const MOTIFS = { arc: Arc, weave: Weave, column: Column, eclipse: Eclipse }

export function CampaignPlate({
  plate,
  className,
}: {
  plate: Plate
  className?: string
}) {
  const tone = TONES[plate.tone]
  const Motif = MOTIFS[plate.motif]

  return (
    <div className={cn("grain relative overflow-hidden", className)}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        /* Decorative: the client name and campaign title sit adjacent in real
           text, so announcing this too would just be duplication. */
        aria-hidden="true"
        focusable="false"
      >
        <rect width={800} height={600} fill={tone.bg} />
        <Motif mark={tone.mark} alt={tone.alt} />
      </svg>
    </div>
  )
}
