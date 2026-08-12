import type { CaseStudy } from "./types"

/**
 * Case studies drawn from the PR Africa International company profile.
 *
 * Every claim here traces to a page of that document — the milestones list, the
 * endorsement letters, or the executed-projects photography. Nothing is
 * extrapolated. Where the profile records no measurable outcome, `results` is
 * short or empty rather than filled with a plausible-looking number.
 *
 * ⚠️ TWO KNOWN GAPS, both needing the client to resolve:
 *
 * 1. RECENCY. The newest item in the profile is a July 2017 mandate letter.
 *    Everything below is archive work. The site needs 2018–2026 projects before
 *    it can credibly present this as a going concern.
 *
 * 2. CLIENT NAMES. See CLIENT_NAMES_CLEARED.
 */

/**
 * Whether the commercial clients below have given written permission to be
 * named on a public website.
 *
 * The bank engagements are evidenced by executed contracts and mandate letters,
 * which are confidential commercial documents — holding a signed contract is
 * not the same as holding permission to advertise the relationship. Until that
 * permission arrives, `displayClient` substitutes a non-identifying descriptor
 * and the case study narratives refer to "the bank" throughout.
 *
 * Flip to `true` only when permission is on file for every client whose
 * `clientCleared` is false below.
 */
export const CLIENT_NAMES_CLEARED = false

/**
 * The name to render for a case study. Public-sector engagements documented in
 * endorsement letters addressed to PRAfrica are cleared individually and are
 * unaffected by the global flag.
 */
export function displayClient(study: CaseStudy): string {
  if (study.clientCleared || CLIENT_NAMES_CLEARED) return study.client
  return study.clientAnonymous ?? `Undisclosed — ${study.sector}`
}

/**
 * Resolves a case study down to what may leave the server.
 *
 * `displayClient` alone is not enough at a client-component boundary: passing a
 * raw CaseStudy to a `"use client"` component serialises *every* field into the
 * RSC payload, so an uncleared name ships to the browser in plain text whether
 * or not anything renders it. Sanitise here instead, and the name never leaves
 * the server at all.
 *
 * The result is marked cleared because its `client` field is already the public
 * value — `displayClient` stays correct if it is called again downstream.
 */
export function toPublicCaseStudy(study: CaseStudy): CaseStudy {
  return {
    ...study,
    client: displayClient(study),
    clientCleared: true,
    clientAnonymous: undefined,
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nigeria-50-heathrow-express",
    client: "Federal Republic of Nigeria",
    clientCleared: true,
    title: "Nigeria at fifty, on the way in from Heathrow",
    summary:
      "Thirty panels at Heathrow Express station carrying the Nigeria @ 50 campaign to every passenger travelling into central London.",
    division: "branding",
    sector: "Nation branding",
    markets: ["United Kingdom"],
    year: 2010,
    services: [
      "Country branding",
      "Global media buying",
      "Sponsorship drive",
      "Government relations",
    ],
    results: [
      { value: "30", label: "Panels at Heathrow Express station" },
      { value: "50th", label: "Independence anniversary campaign" },
    ],
    plate: { motif: "eclipse", tone: "clay" },
    featured: true,
    narrative: {
      challenge:
        "Nigeria's fiftieth independence anniversary needed to be visible somewhere that mattered to the audience it was aimed at — international business travellers, diaspora and the London media — rather than only at home. The \"Good People, Great Nation\" platform existed. A place to run it did not.",
      approach:
        "We secured thirty advertising panels at Heathrow Express station, the corridor every passenger travelling from Heathrow into central London passes through, and brought in a commercial sponsor to fund the placement rather than asking the campaign to carry the cost alone.",
      outcome:
        "The placement ran through the anniversary period and was formally acknowledged by the Federal Ministry of Information and Communications, which credited the team by name and held the sponsor up as an example for other corporate organisations to follow.",
    },
    deliverables: [
      "Thirty panels at Heathrow Express station",
      "Sponsor identification and negotiation",
      "Message production and installation",
      "Placement scheduling across the anniversary period",
    ],
    quote: {
      text: "I have been informed of your evident patronage, through the effort of the team at PRAfrica International Limited, in securing advertising spaces at the Heathrow Express Station for the celebration of Nigeria's 50th independence anniversary.",
      name: "Prof. Dora Akunyili",
      role: "Honourable Minister of Information and Communications",
      org: "Federal Republic of Nigeria, 2010",
    },
  },
  {
    slug: "icasa-2005-abuja",
    client: "International Conference on AIDS & STIs in Africa",
    clientCleared: true,
    title: "Eight thousand delegates, one hundred and two hotels",
    summary:
      "Project co-ordination for the continent's largest HIV/AIDS conference — five days, sixteen countries and a $4m operating budget.",
    division: "communications",
    sector: "Public health",
    markets: ["Nigeria"],
    year: 2005,
    services: [
      "Event management",
      "Media publicity",
      "Sponsorship and event management",
      "Volunteer co-ordination",
    ],
    results: [
      { value: "8,000", label: "Participants from 16 countries" },
      { value: "700", label: "Volunteers co-ordinated" },
      { value: "102", label: "Hotels across the host city" },
    ],
    plate: { motif: "weave", tone: "ochre" },
    featured: true,
    narrative: {
      challenge:
        "ICASA 2005 brought over eight thousand participants from sixteen countries to Abuja for five days across twelve sessions. An event at that scale fails on logistics long before it fails on content: accommodation, movement, accreditation and press all have to work simultaneously in a city that has to absorb the load.",
      approach:
        "PRAfrica International served as project co-ordinator on a $4m budget, running event management, media publicity and event sponsorship together rather than as separate workstreams. Seven hundred volunteers were recruited and co-ordinated, and accommodation was managed across a hundred and two hotels.",
      outcome:
        "The conference ran its full five-day, twelve-session programme. It remains the largest single event in the company's record and the clearest evidence of its operational capacity at scale.",
    },
    deliverables: [
      "Project co-ordination across a five-day programme",
      "Accommodation management across 102 hotels",
      "Recruitment and co-ordination of 700 volunteers",
      "Media publicity and press management",
      "Event sponsorship and management",
    ],
  },
  {
    slug: "minex-made-in-nigeria",
    client: "Nigerian Export Promotion Council and NIPC",
    clientCleared: true,
    title: "Made in Nigeria, shown at the Barbican",
    summary:
      "An export exhibition franchise that ran for eight years from the Barbican to Wembley Arena to the Sandton Convention Centre.",
    division: "communications",
    sector: "Trade and investment",
    markets: ["United Kingdom", "South Africa", "Nigeria"],
    year: 2006,
    services: [
      "Exhibition organisation",
      "Trade and investment promotion",
      "Government relations",
      "Sponsorship drive",
    ],
    results: [
      { value: "8 yrs", label: "Continuous franchise, 1999 to 2006" },
      { value: "3", label: "Host venues across two continents" },
      { value: "2", label: "Federal agencies partnered" },
    ],
    plate: { motif: "column", tone: "deep" },
    narrative: {
      challenge:
        "Nigerian manufacturers had product to export and no forum in which international buyers could see it. Trade promotion at the time meant delegations and paperwork, not a room where someone could pick a product up.",
      approach:
        "MINEX — Made in Nigeria Exhibitions — was built as a recurring exhibition franchise rather than a one-off event, in partnership with the Nigerian Export Promotion Council and the Nigerian Investment Promotion Commission. It opened at the Barbican Centre in London in 1999, moved to Wembley Arena in 2000, and ran at the Sandton Convention Centre in Johannesburg from 2004 to 2006 as the focus shifted to intra-African trade.",
      outcome:
        "The franchise ran for eight years across three venues on two continents, and drew formal endorsement from both the Presidency and the NEPAD Secretariat.",
    },
    deliverables: [
      "Exhibition concept and franchise design",
      "Venue negotiation in London and Johannesburg",
      "Federal agency partnership (NEPC, NIPC)",
      "Exhibitor recruitment and sponsorship drive",
      "Media publicity across both markets",
    ],
    quote: {
      text: "Your laudable effort at contributing to the growth and development of our nation is one which I have no hesitation in endorsing.",
      name: "Olusegun Obasanjo",
      role: "President",
      org: "Federal Republic of Nigeria, 2004",
    },
  },
  {
    slug: "airport-global-visibility",
    client: "GTBank Plc",
    clientCleared: false,
    clientAnonymous: "Pan-African banking group",
    title: "An African bank, met at the arrivals gate",
    summary:
      "Airport domination across Heathrow and OR Tambo, positioning a Nigerian bank as an international one at the point where the audience lands.",
    division: "branding",
    sector: "Banking",
    markets: ["United Kingdom", "South Africa"],
    year: 2010,
    services: [
      "Global branding",
      "Airport and outdoor media",
      "Media buying and negotiation",
      "Production and installation",
    ],
    results: [
      { value: "2", label: "International hub airports" },
      { value: "5+", label: "Arrival, departure and roadside sites" },
    ],
    plate: { motif: "arc", tone: "ochre" },
    featured: true,
    narrative: {
      challenge:
        "The bank had listed on the London Stock Exchange and operated across five countries, but outside its home market it still read as a regional institution. The claim it needed to make — African in origin, international in standard — is one nobody believes from a press release.",
      approach:
        "We placed it where the claim proves itself: the arrivals halls, baggage reclaims and transit corridors of two international hub airports, in London and Johannesburg, alongside roadside placement on the approach to OR Tambo. Message production, installation and maintenance were run in-market at both ends.",
      outcome:
        "The bank held continuous visibility at both hubs, and the programme became the basis of a global branding offer the company has since run for other clients in the UK, South Africa and Dubai.",
    },
    deliverables: [
      "Arrival scrollers and light boxes, Heathrow",
      "Baggage reclaim and ticketing hall sites, OR Tambo",
      "Roadside unipole on the OR Tambo approach",
      "Message production and installation, both markets",
      "Site maintenance across the placement period",
    ],
  },
  {
    slug: "heathrow-terminal-programme",
    client: "First Bank of Nigeria",
    clientCleared: false,
    clientAnonymous: "Leading Nigerian commercial bank",
    title: "Twenty sites, two terminals, twelve months",
    summary:
      "A year-long Heathrow terminal programme built around the moment a passenger arrives in London, renewed off the back of the previous run.",
    division: "branding",
    sector: "Banking",
    markets: ["United Kingdom"],
    year: 2014,
    services: [
      "Global media buying",
      "Airport and outdoor media",
      "Message production",
      "Placement monitoring",
    ],
    results: [
      { value: "20", label: "Advertising sites across the year" },
      { value: "2", label: "Heathrow terminals" },
      { value: "12 mo", label: "Continuous placement" },
    ],
    plate: { motif: "weave", tone: "sand" },
    narrative: {
      challenge:
        "The bank wanted to own the arrival moment at Heathrow for a full calendar year — a placement that only works if the sites are held continuously and the creative is refreshed inside the run, rather than bought as a single burst and left to go stale.",
      approach:
        "We structured the buy across two terminals and three formats: ten arrival scrollers at Terminal 5, five \"Welcome to London\" arrival light boxes at Terminal 3, and five departure light boxes at Terminal 3, staggered so coverage held across the year. Production, installation and maintenance were included in the fee across three creative iterations.",
      outcome:
        "The programme ran from January to December and was itself a renewal of the previous year's placement — the clearest signal available that the first run had worked.",
    },
    deliverables: [
      "Ten arrival scrollers, Terminal 5",
      "Five arrival light boxes, Terminal 3",
      "Five departure light boxes, Terminal 3",
      "Three creative iterations across the run",
      "Installation and maintenance throughout",
    ],
  },
  {
    slug: "outdoor-media-oversight",
    client: "Fidelity Bank Plc",
    clientCleared: false,
    clientAnonymous: "Nigerian commercial bank",
    title: "Buying the outdoor, then checking it was there",
    summary:
      "Appointed oversight agency for a bank's national outdoor media — responsible not just for the buy but for verifying it ran.",
    division: "branding",
    sector: "Banking",
    markets: ["Nigeria"],
    year: 2017,
    services: [
      "Outdoor media buying",
      "Media monitoring and verification",
      "Vendor management",
      "Campaign reporting",
    ],
    results: [
      { value: "3", label: "Formats: unipole, gantry, bus shelter" },
    ],
    plate: { motif: "column", tone: "clay" },
    narrative: {
      challenge:
        "Outdoor media in Nigeria is bought from a fragmented vendor base, and the gap between what is invoiced and what is actually posted is the category's structural weakness. The bank needed a single agency accountable for both halves of that problem.",
      approach:
        "We were engaged as oversight agency for outdoor media buying and monitoring, under a service level agreement covering the campaign. Verification was treated as a deliverable in its own right rather than as a courtesy attached to the buy.",
      outcome:
        "The bank's short-code campaign ran across unipole billboards, roadside gantries and branded bus shelters on major Lagos and Abuja corridors, with placement verified against what had been bought.",
    },
    deliverables: [
      "Outdoor media planning and buying",
      "Unipole, gantry and bus shelter placement",
      "Independent monitoring and verification",
      "Vendor negotiation and management",
      "Campaign reporting against the buy",
    ],
  },
]

/**
 * Engagements the profile records without enough detail to carry a full case
 * study page. Listed rather than dropped: together they are the evidence for
 * the conference and advocacy side of the business.
 */
export const archiveEngagements = [
  {
    title: "UNESCO Business Roundtable on Education for All",
    year: "2002",
    detail:
      "A two-day conference convening the organised private sector behind UNESCO's Education for All initiative. Media publicity, event management and sponsorship drive.",
  },
  {
    title: "Business Investment Forum, Johannesburg",
    year: "2005",
    detail:
      "A three-day forum at the Sandton Convention Centre with the Nigerian Investment Promotion Commission, targeting foreign direct investment across agriculture, mining, oil and gas, telecoms and manufacturing. Media relations and public marketing.",
  },
  {
    title: "Technical and Vocational Education Conference",
    year: "2008",
    detail:
      "A three-day conference and exhibition for the Education Trust Fund on technical and vocational education in a developing economy. Event management, media publicity and sponsorship.",
  },
  {
    title: "CBN 2020 Financial Conference",
    year: "2007",
    detail:
      "A stakeholders' forum convening the banking industry on strategy for the sector. Media relations and stakeholder forum management.",
  },
]

/** Use these anywhere the data crosses into the browser. */
export const publicCaseStudies = caseStudies.map(toPublicCaseStudy)

export const featuredCaseStudies = publicCaseStudies.filter((c) => c.featured)

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

/** Wraps around, so the last case study points back to the first. */
export function getNextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug)
  if (i === -1) return undefined
  return caseStudies[(i + 1) % caseStudies.length]
}

/** Distinct sectors, for the work index filter. */
export const sectors = [...new Set(caseStudies.map((c) => c.sector))].sort()
