import { ImageResponse } from "next/og"

import { LOGO_DATA_URI } from "@/lib/og"

/**
 * Apple touch icon — the real company mark, not a stand-in.
 *
 * 180px is the one icon size large enough to carry the actual lockup: drawn at
 * 156px against a 235px original, the mark is downscaled and therefore sharp.
 * The favicon in app/icon.svg cannot do this — at 16px the wordmark collapses
 * into an unreadable smudge — so that one stays a "PR" monogram. The two are
 * deliberately different marks for that reason, not by oversight.
 *
 * Sand ground rather than clay: the mark's "Africa" is near-black, which needs
 * a light plate to read. That is also how the brand uses it on the profile.
 *
 * iOS applies its own corner rounding, so this is drawn edge-to-edge with no
 * radius, and the mark is inset well clear of the corners the mask eats.
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
          backgroundColor: "#FAF5ED",
        }}
      >
        <img
          src={LOGO_DATA_URI}
          width={156}
          height={40}
          alt="PR Africa International"
        />
      </div>
    ),
    size
  )
}
