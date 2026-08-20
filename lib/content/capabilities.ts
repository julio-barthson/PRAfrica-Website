import type { Capability, Client, Stat, Testimonial } from "./types"

/**
 * Service lines, proof points and endorsements — all taken from the PR Africa
 * International company profile.
 *
 * The four headline services are the ones the company states for itself; the
 * remaining three are added because the milestones and executed projects show
 * them being delivered repeatedly, and a services page that omits the work the
 * company actually does is the wrong kind of modest.
 */
export const capabilities: Capability[] = [
  {
    title: "Country Branding & Marketing",
    description:
      "Positioning a nation to an international audience, the campaign, the placement and the government relations that make both possible.",
    division: "branding",
    offerings: [
      "Nation brand platforms",
      "International placement",
      "Sponsor recruitment",
      "Government liaison",
    ],
  },
  {
    title: "Global Outdoor & Airport Media",
    description:
      "Buying and holding high-value out-of-home sites in international hubs, Heathrow, OR Tambo, and on the corridors that matter at home.",
    division: "branding",
    offerings: [
      "Airport terminal placement",
      "Buying and negotiation",
      "Production and installation",
      "Monitoring and verification",
    ],
  },
  {
    title: "Sponsorship Drive & Marketing",
    description:
      "Finding the commercial partner who will fund the platform, and structuring the relationship so both sides get what they came for.",
    division: "branding",
    offerings: [
      "Sponsor identification",
      "Proposition and pricing",
      "Negotiation",
      "Activation and reporting",
    ],
  },
  {
    title: "Public Relations",
    description:
      "Media publicity and press management for organisations whose reputation is decided by people they will never meet.",
    division: "communications",
    offerings: [
      "Media relations",
      "Press office",
      "Publicity campaigns",
      "Stakeholder forums",
    ],
  },
  {
    title: "Trade & Investment Promotion",
    description:
      "Putting exporters in front of buyers and investors in front of opportunity, exhibitions, forums and the federal partnerships behind them.",
    division: "communications",
    offerings: [
      "Trade exhibitions",
      "Investment forums",
      "Exhibitor recruitment",
      "Bilateral programmes",
    ],
  },
  {
    title: "Political Advocacy & Lobby",
    description:
      "Making a case to the institutions that decide, and knowing which ones actually do.",
    division: "communications",
    offerings: [
      "Advocacy strategy",
      "Institutional relations",
      "Endorsement and support",
      "Position papers",
    ],
  },
  {
    title: "Conference & Event Management",
    description:
      "Multi-day conferences and exhibitions run end to end, delegates, venues, volunteers, accreditation and press.",
    division: "communications",
    offerings: [
      "Programme co-ordination",
      "Delegate and accommodation logistics",
      "Volunteer management",
      "Exhibition production",
    ],
  },
]

/**
 * Proof points. Each traces to a specific page of the profile — the MINEX run,
 * the ICASA figures, the Nigeria @ 50 placement, the two partner firms. Nothing
 * here is an estimate, because a rounded-up number on this page is the one a
 * prospective client will ask about.
 */
export const stats: Stat[] = [
  {
    value: "25+",
    label: "Years operating",
    note: "since the first Made-in-Nigeria Exhibition, London 1999",
  },
  {
    value: "8,000",
    label: "Delegates co-ordinated",
    note: "ICASA 2005, from 16 countries over 5 days",
  },
  {
    value: "30",
    label: "Heathrow Express panels",
    note: "Nigeria @ 50 campaign, 2010",
  },
  {
    value: "2",
    label: "International partner firms",
    note: "London and New York",
  },
]

/**
 * ⚠️ `cleared` gates the public client wall.
 *
 * Public-sector and multilateral engagements are cleared: each is evidenced by
 * an endorsement or engagement letter addressed to PRAfrica, and the
 * relationships are already a matter of public record. The banks are not —
 * those are commercial contracts, and being party to one is not permission to
 * advertise it. Flip each to `true` as written permission arrives.
 */
export const clients: Client[] = [
  { name: "Federal Republic of Nigeria", sector: "Government", cleared: true },
  { name: "Nigerian Export Promotion Council", sector: "Trade", cleared: true },
  {
    name: "Nigerian Investment Promotion Commission",
    sector: "Investment",
    cleared: true,
  },
  { name: "NEPAD Secretariat", sector: "Multilateral", cleared: true },
  { name: "UNESCO", sector: "Multilateral", cleared: true },
  {
    name: "Central Bank of Nigeria",
    sector: "Financial policy",
    cleared: true,
  },
  {
    name: "Federal Ministry of Information",
    sector: "Government",
    cleared: true,
  },
  { name: "Education Trust Fund", sector: "Education", cleared: true },
  { name: "ICASA", sector: "Public health", cleared: true },
  { name: "GTBank Plc", sector: "Banking", cleared: false },
  { name: "First Bank of Nigeria", sector: "Banking", cleared: false },
  { name: "United Bank for Africa Plc", sector: "Banking", cleared: false },
  { name: "Fidelity Bank Plc", sector: "Banking", cleared: false },
]

/** Only the clients cleared to be named publicly. */
export const publicClients = clients.filter((c) => c.cleared)

/**
 * Endorsements, quoted from letters addressed to PRAfrica and reproduced in the
 * company profile. Both are dated in the attribution — they are archival, and
 * presenting a 2004 letter as a current client testimonial would misrepresent
 * it. Genuine client quotes from the commercial engagements do not exist yet
 * and need to be requested.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I wish to register my appreciation for the patriotic spirit that has prompted your organisation's proactive initiative in projecting and marketing Nigeria in the best possible light to the international community. Your laudable effort at contributing to the growth and development of our nation is one which I have no hesitation in endorsing.",
    name: "Olusegun Obasanjo",
    role: "President",
    company: "Federal Republic of Nigeria",
    year: "2004",
  },
  {
    quote:
      "It is our belief that these initiatives will go a long way towards enhancing our efforts in promoting investments in Africa and among the Nigerian business fraternity. We hereby convey to you the support and endorsement of the NEPAD Secretariat to your proposed events.",
    name: "Prof. Wiseman Nkuhlu",
    role: "Chairperson, Steering Committee",
    company: "NEPAD Secretariat",
    year: "2004",
  },
]
