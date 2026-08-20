import { OG_CONTENT_TYPE, OG_SIZE, ogCard } from "@/lib/og"

export const alt =
  "PR Africa International | integrated marketing communications across Africa"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return ogCard({
    eyebrow: "Integrated Marketing Communications",
    title: "Selling Africa to the world.",
  })
}
