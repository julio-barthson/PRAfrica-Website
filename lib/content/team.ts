import type { TeamMember } from "./types"

/**
 * Current management, confirmed by the client (August 2026) and superseding the
 * seven-person board in the 2017 company profile — Peter Walker, Adesuwa
 * Garrick, Adegoke Oshunnyi, Anita Ogunleye, Andy Njoku-Obi, Sule Kokori and
 * Okon Emmanuel are all off the site as a result.
 *
 * ⚠️ The client has flagged that management is still changing, so treat this as
 * current-but-provisional and re-confirm before launch.
 *
 * Bios are present only where the record supports one. Two of the three people
 * below appear nowhere in any document we hold, and writing them a plausible
 * career history would be inventing claims about a named private individual.
 * The layout handles a missing bio; ask the client for real ones instead.
 */
export const team: TeamMember[] = [
  {
    name: "Prince Dapo Adelegan",
    role: "President & Chief Executive Officer",
    /* Evidenced: the Federal Ministry of Information's 2010 letter credits him
       by name as leading the Nigeria @ 50 Heathrow Express placement, and he
       signed the 2017 Fidelity outdoor media mandate as MD/CEO. */
    bio: "Named by the Federal Ministry of Information and Communications as leading the team behind the Nigeria @ 50 placement at Heathrow Express.",
    plate: { motif: "eclipse", tone: "clay" },
  },
  {
    name: "Toba Benjamin Adelegan",
    role: "Executive Director",
    plate: { motif: "column", tone: "ochre" },
  },
  {
    name: "Fajobi Comfort Oreoluwa",
    role: "Head, Client Services",
    plate: { motif: "arc", tone: "deep" },
  },
]

/**
 * Territories with delivered work or a standing partner, per the company
 * profile — not an aspirational footprint.
 *
 * Nigeria, the UK and South Africa all have executed projects behind them. The
 * United States is partner reach only (Feintuch Communications, New York), as
 * is the London entry beyond the campaigns themselves (Pielle Consulting). The
 * profile's cover claims Lagos / London / New York / Johannesburg as offices,
 * but page 11 shows London and New York are partner firms — so this list says
 * "markets", and the About page says which is which.
 */
export const markets = [
  "Nigeria",
  "United Kingdom",
  "South Africa",
  "United States",
]

/** Named partner firms, so the About page can be specific about the reach. */
export const partners = [
  {
    name: "Pielle Consulting Ltd",
    location: "292 Vauxhall Bridge Road, Westminster, London",
  },
  {
    name: "Feintuch Communications",
    location: "245 Park Avenue, New York",
  },
]

/** How an engagement actually runs — shown on the services page. */
export const engagementSteps = [
  {
    title: "Brief & interrogate",
    description:
      "We pressure-test the brief before we price it. If the problem is not the one stated, this is where we say so.",
  },
  {
    title: "Strategy & plan",
    description:
      "Market reading, audience work and a campaign architecture with a media plan attached to it, not bolted on after.",
  },
  {
    title: "Produce",
    description:
      "Creative, film, events and activation, produced in-market with local crews and local permits.",
  },
  {
    title: "Run & report",
    description:
      "Live campaign management with reporting against the numbers agreed at the start, including the ones that did not move.",
  },
]
