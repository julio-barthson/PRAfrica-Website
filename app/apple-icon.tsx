import { ImageResponse } from "next/og"

/**
 * Apple touch icon. iOS requires a raster and applies its own rounding, so this
 * is drawn edge-to-edge with no corner radius of its own — the same glyph as
 * app/icon.svg, scaled up.
 */
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#B44B29",
        }}
      >
        {/* Keep in step with app/icon.svg. Inset from the edges so iOS's corner
            mask can't clip the baseline rule. */}
        <svg width="180" height="180" viewBox="0 0 32 32">
          <path d="M4 21 A12 12 0 0 1 28 21 Z" fill="#FAF5ED" />
          <path d="M9.5 21 A6.5 6.5 0 0 1 22.5 21 Z" fill="#DD9A39" />
          <rect x="6" y="23.5" width="20" height="2.5" rx="1.25" fill="#FAF5ED" />
        </svg>
      </div>
    ),
    size
  )
}
