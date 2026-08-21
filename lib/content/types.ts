/**
 * Content model for the PRAfrica site.
 *
 * Content is authored as typed data rather than pulled from a CMS: the site is
 * developer-maintained, so a file edit + deploy is the whole publishing flow.
 * These shapes are deliberately CMS-isomorphic — if a marketing hire later needs
 * to publish without a developer, each interface maps 1:1 onto a schema.
 */

/**
 * Which side of the business a piece of work or a capability belongs to.
 *
 * These two names come from the company profile, not from us. "branding" is the
 * global visibility work — airport and outdoor media, country branding,
 * sponsorship. "communications" is the earned and advocacy side — PR, political
 * lobbying, trade promotion and the conference programme.
 */
export type Division = "branding" | "communications"

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

export interface CampaignImage {
  /** Path under /public. */
  src: string
  alt: string
  /** Intrinsic pixel size of the file — never the display size. */
  width: number
  height: number
}

export interface CaseStudy {
  slug: string
  /** The real client. Only rendered when `clientCleared` is true — see work.ts. */
  client: string
  /**
   * Whether this client has given written permission to be named publicly.
   * Public-sector engagements evidenced by endorsement letters addressed to
   * PRAfrica are cleared; commercial contracts are not until the client says so.
   */
  clientCleared: boolean
  /** Non-identifying descriptor shown in place of `client` while uncleared. */
  clientAnonymous?: string
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
  /**
   * Headline outcomes. Keep to 3 — more reads as noise, fewer reads as thin.
   * May be empty: some of the archive work predates any reporting we hold, and
   * an invented metric is worse than none. Consumers must handle [].
   */
  results: { value: string; label: string }[]
  plate: Plate
  /**
   * Campaign photograph, as a path under /public. Optional: only some projects
   * have usable imagery, and the rest fall back to `plate`.
   *
   * Every one of these was recovered from the flattened page rasters of the
   * company profile PDF, so they top out around 410px wide. That is the real
   * ceiling, not a placeholder — render them at card size and do not blow them
   * up into heroes until original camera files are recovered.
   */
  image?: CampaignImage
  /**
   * Further photographs of the same campaign, shown as a gallery on the detail
   * page. Same provenance and same size ceiling as `image`.
   */
  gallery?: CampaignImage[]
  featured?: boolean
  /** The case study body. Three beats is the whole story a buyer needs. */
  narrative: {
    challenge: string
    approach: string
    outcome: string
  }
  /** What was actually shipped. Concrete nouns beat abstractions here. */
  deliverables: string[]
  /**
   * Optional quote specific to this project. `org` overrides the client name in
   * the attribution — several of these come from endorsing bodies (a ministry,
   * a secretariat) rather than from the client who commissioned the work.
   */
  quote?: { text: string; name: string; role: string; org?: string }
}

export interface TeamMember {
  name: string
  role: string
  /**
   * One line — the site is not a CV. Optional, and omitted rather than
   * invented: these are real, named people, and a plausible-sounding career
   * history attributed to someone who never claimed it is a fabrication about a
   * private individual, not filler copy.
   */
  bio?: string
  plate: Plate
  image: string
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
  /**
   * Year the endorsement was given. Shown in the attribution: these are archival
   * letters, and presenting a 2004 endorsement as if it were current would be
   * the dishonest way to use them.
   */
  year: string
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
  /** Only cleared clients appear on the public client wall. */
  cleared: boolean
}
