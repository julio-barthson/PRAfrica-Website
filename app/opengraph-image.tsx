import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from "@/lib/og"

export const alt = "PRAfrica — advertising and entertainment across African markets"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return ogCard({
    eyebrow: "Advertising & Entertainment",
    title: "We build brands that move a continent.",
  })
}
