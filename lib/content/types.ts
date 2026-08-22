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
  /**
   * Set only where we hold a real, sourced long-form profile. Drives the
   * /about/[slug] route and decides which team cards become links — members
   * without one render as plain cards rather than linking to an empty page.
   */
  profileSlug?: string
}

/**
 * Long-form biography for a named individual.
 *
 * Split into typed sections rather than a single prose blob so the page can lay
 * out a timeline and credential lists properly, and so every claim stays
 * traceable to a line in the source document. Nothing here is inferred: if the
 * profile does not state it, the field is absent.
 */
export interface LeaderProfile {
  slug: string
  name: string
  /** Matches the `role` on the corresponding TeamMember. */
  role: string
  /** One sentence, used as the page lead and the meta description. */
  headline: string
  /**
   * Two or three credentials for the home page, chosen editorially rather than
   * derived from the lists below — "most recent" and "most worth leading with"
   * are rarely the same entry, and a homepage that picks for itself gets it
   * wrong the first time the data changes.
   */
  highlights?: string[]
  /** Body copy, one entry per paragraph. */
  biography: string[]
  education: {
    qualification: string
    institution: string
    /** Absent where the source gives no year — rendered as a plain row. */
    year?: number
  }[]
  /**
   * Dated career events, newest last. `year` is a string so open-ended spans
   * ("1999–2006") sit in the same list as single years.
   */
  milestones: { year: string; title: string; detail?: string }[]
  /**
   * Board seats and offices held. `current` drives the "Present" grouping —
   * a past presidency shown as a standing one is a false claim, so anything
   * unconfirmed belongs in `unverified` instead.
   */
  appointments: { role: string; org: string; current: boolean }[]
  honours: { title: string; awarder?: string; year?: number }[]
  /**
   * Claims from the source document that cannot be published as-is — undated
   * offices, unattributed rankings, self-ageing counts. Never rendered. Kept
   * here so the gap is visible in review instead of quietly dropped.
   */
  unverified?: string[]
}

/**
 * A recurring programme or lecture series hosted by the firm or its principals.
 *
 * Modelled as a standing curriculum, not an event: the source flyer was for one
 * sitting on a fixed date, but the profile describes an ongoing series. Dates,
 * fees and payment details are deliberately absent from this shape — they are
 * perishable, and the account details on the flyer must not reach a public page.
 */
export interface Programme {
  slug: string
  name: string
  /** The programme's own brand line. */
  strapline: string
  summary: string
  /** Name of the person who leads it. */
  host: string
  /** Link to the host's profile page, where one exists. */
  hostProfileSlug?: string
  modules: { title: string; topics: string[] }[]
  /** How a session runs — the non-lecture components. */
  format: string[]
  venue?: string
  /**
   * The programme's own promotional artwork, shown as a designed artefact
   * beside the typeset curriculum rather than in place of it.
   *
   * ⚠️ Whatever is put here is served publicly at its path under /public. The
   * source flyer carried a bank account and two personal mobile numbers, so the
   * file referenced here is a crop taken above that block — see programmes.ts.
   * Never point this at an uncropped promotional file without reading it first.
   */
  image?: CampaignImage
  /**
   * Attribution for the intellectual framework the curriculum draws on.
   * Rendered on the page. Publishing another author's named concepts as an
   * unattributed syllabus is passing off, so this is not optional in practice.
   */
  attribution?: string
}

/**
 * An out-of-home format the company sells and installs.
 *
 * Format, not client, is the organising principle here: a buyer arrives knowing
 * they want reach on a corridor, and picks the structure that delivers it. The
 * work pages already index by client and sector, so this is the other axis.
 */
export interface OohFormat {
  slug: string
  name: string
  /** One line, shown under the name — what the structure physically is. */
  definition: string
  /** The write-up: where it works and what it is good for. Two or three sentences. */
  description: string
  /** What this format is strongest at. Keep to three — this is a scan, not a spec. */
  strengths: string[]
  /**
   * Installed sites. May be empty: some formats are sold from the rate card
   * before there is usable photography of them, and a stated capability with
   * no picture is honest where a borrowed picture is not. Consumers must
   * handle [] and render the format as a text card.
   */
  placements: OohPlacement[]
}

export interface OohPlacement {
  /** Path under /public. */
  src: string
  alt: string
  /** Intrinsic pixel size of the file — never the display size. */
  width: number
  height: number
  /** The advertiser whose creative is on the structure. */
  client: string
  /** Where it stands, as specifically as the record supports. */
  location: string
  /**
   * Capture date from the photograph's own GPS stamp, where it carries one.
   * Shown in the caption: these are monitoring photographs and the date is the
   * point of them, not metadata to hide.
   */
  captured?: string
  /**
   * True where the creative is composited onto the structure rather than
   * photographed installed — inventory shown with indicative artwork. Rendered
   * as an explicit label, because a mockup presented as a delivered campaign is
   * a misrepresentation of the work.
   */
  indicative?: boolean
  /** Held back from the home page strip; still shown on the format page. */
  secondary?: boolean
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
  /**
   * Optional deeper page for capabilities that have one. Only set where real
   * content exists behind it — a "learn more" that leads nowhere is worse than
   * no link at all.
   */
  href?: string
  /** Link text, shown only when `href` is set. */
  hrefLabel?: string
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
