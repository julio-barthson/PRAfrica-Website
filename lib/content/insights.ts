import type { Insight } from "./types"

/**
 * Article metadata lives here; the article *body* lives in an MDX file at
 * `content/insights/<slug>.mdx`. Keeping metadata in TypeScript means the index
 * page, sitemap and OG images all read typed data rather than parsing
 * frontmatter, while the prose stays somewhere pleasant to write.
 *
 * To publish: add an entry here and create the matching .mdx file. A mismatch
 * between the two surfaces as a build error rather than a silent 404.
 *
 * ⚠️ PLACEHOLDER articles — replace with real editorial.
 */
export const insights: Insight[] = [
  {
    slug: "media-buying-is-not-one-market",
    title: "Africa is not one media market, and buying it as one is expensive",
    summary:
      "Why a single continental media plan usually underperforms three cheaper local ones — and how to tell which markets can share a buy.",
    date: "2026-05-19",
    readingMinutes: 6,
    category: "Media",
    author: "Placeholder Name",
    plate: { motif: "column", tone: "clay" },
  },
  {
    slug: "radio-still-wins",
    title: "Radio still wins, and the planning decks still ignore it",
    summary:
      "Reach numbers that would justify a television budget, at a fraction of the cost, in the languages purchase decisions are actually made in.",
    date: "2026-03-02",
    readingMinutes: 5,
    category: "Strategy",
    author: "Placeholder Name",
    plate: { motif: "weave", tone: "ochre" },
  },
  {
    slug: "brand-partnerships-that-outlive-the-campaign",
    title: "Build a property, don't rent someone else's audience",
    summary:
      "Sponsorship ends when the invoice does. Owned cultural properties compound. A case for building rather than buying.",
    date: "2026-01-14",
    readingMinutes: 7,
    category: "Entertainment",
    author: "Placeholder Name",
    plate: { motif: "eclipse", tone: "deep" },
  },
]

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug)
}
