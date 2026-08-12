import fs from "node:fs"
import path from "node:path"
import { ImageResponse } from "next/og"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

/**
 * The company mark, inlined as a data URI.
 *
 * Satori cannot fetch from the origin while the card is being generated, so the
 * bytes have to be embedded. Read once at module scope: these cards are all
 * prerendered at build time in the Node runtime, so this is a build-time read,
 * not a per-request one.
 *
 * Sizes downstream must stay at or below the mark's native 235x61. It came off
 * a page scan and has no detail above that — see components/site/wordmark.tsx.
 */
export const LOGO_DATA_URI = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public", "prafrica-logo.png"))
  .toString("base64")}`

export const LOGO_NATIVE = { width: 235, height: 61 }

/**
 * Brand palette as literal hex.
 *
 * OG images render in Satori, which has no access to the document — CSS custom
 * properties resolve to nothing there. These are the same values the OKLCH
 * tokens compute to, so the cards match the site.
 */
const SAND = "#FAF5ED"
const INK = "#271B15"
const CLAY = "#B44B29"
const OCHRE = "#DD9A39"
const MUTED = "#715F55"

/**
 * Shared OG card. Type is set in the Satori default face rather than Fraunces —
 * loading the display font would mean shipping a font binary or fetching one at
 * build time, and the card already reads as ours through palette and geometry.
 *
 * Note: Satori requires explicit `display: flex` on any element with more than
 * one child, and supports no shorthand-less layout defaults.
 */
export function ogCard({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string
  title: string
  meta?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: SAND,
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Arc fan, bottom-right — the same motif as the site hero. */}
        <div
          style={{
            position: "absolute",
            right: -140,
            bottom: -220,
            display: "flex",
          }}
        >
          <svg width="620" height="620" viewBox="0 0 600 600">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <circle
                key={i}
                cx={600}
                cy={600}
                r={90 + i * 66}
                fill="none"
                stroke={i % 3 === 0 ? CLAY : OCHRE}
                strokeWidth={i % 3 === 0 ? 16 : 6}
                opacity={0.28}
              />
            ))}
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 44, height: 5, backgroundColor: CLAY, marginRight: 18 }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: CLAY,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 62 : 78,
              lineHeight: 1.05,
              color: INK,
              fontWeight: 700,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          {meta ? (
            <div style={{ fontSize: 26, color: MUTED, marginTop: 26 }}>{meta}</div>
          ) : null}
        </div>

        {/* Footer lockup: the real mark rather than its name set in type.
            Drawn at 188px against a 235px original, so it is downscaled and
            stays sharp — the card never asks the scan for detail it lacks.

            The mark stands alone. Setting "Selling Africa to the World" beside
            it repeated the line twice on the home card, where the strapline is
            already the headline. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={LOGO_DATA_URI}
            width={188}
            height={49}
            alt="PR Africa International"
          />
        </div>
      </div>
    ),
    OG_SIZE
  )
}
