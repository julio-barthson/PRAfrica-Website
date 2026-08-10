/**
 * Content model for the PRAfrica site.
 *
 * Content is authored as typed data rather than pulled from a CMS: the site is
 * developer-maintained, so a file edit + deploy is the whole publishing flow.
 * These shapes are deliberately CMS-isomorphic — if a marketing hire later needs
 * to publish without a developer, each interface maps 1:1 onto a schema.
 */

/** Which side of the business a piece of work or a capability belongs to. */
export type Division = "advertising" | "entertainment"

/**
 * Drives the generated SVG artwork used in place of real photography.
 * Each plate is deterministic — same slug always renders the same composition.
 */
export type PlateMotif = "arc" | "weave" | "column" | "eclipse"

export interface Plate {
  motif: PlateMotif
  /** 0–360, rotates the plate's hue within the warm brand range. */
  tone: "clay" | "ochre" | "deep" | "sand"
}

export interface CaseStudy {
  slug: string
  client: string
  /** Short, punchy — used as the card headline. */
  title: string
  /** One line of context shown under the title. */
  summary: string
  division: Division
  /** e.g. "Telecoms", "FMCG" — used for filtering on the work index. */
  sector: string
  /** Territories the campaign ran in. */
  markets: string[]
  year: number
  services: string[]
  /** Headline outcomes. Keep to 3 — more reads as noise, fewer reads as thin. */
  results: { value: string; label: string }[]
  plate: Plate
  featured?: boolean
  /** The case study body. Three beats is the whole story a buyer needs. */
  narrative: {
    challenge: string
    approach: string
    outcome: string
  }
  /** What was actually shipped. Concrete nouns beat abstractions here. */
  deliverables: string[]
  /** Optional client quote specific to this project. */
  quote?: { text: string; name: string; role: string }
}

export interface TeamMember {
  name: string
  role: string
  /** One line — the site is not a CV. */
  bio: string
  plate: Plate
}

export interface Insight {
  slug: string
  title: string
  summary: string
  /** ISO date string, e.g. "2025-11-04". */
  date: string
  readingMinutes: number
  category: string
  author: string
  plate: Plate
}

export interface Capability {
  title: string
  description: string
  division: Division
  /** Concrete deliverables — what the client actually receives. */
  offerings: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface Stat {
  value: string
  label: string
  /** Optional qualifier shown small, e.g. "across 12 markets". */
  note?: string
}

export interface Client {
  name: string
  sector: string
}
