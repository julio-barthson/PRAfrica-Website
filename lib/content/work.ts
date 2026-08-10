import type { CaseStudy } from "./types"

/**
 * ⚠️ PLACEHOLDER CONTENT — REPLACE BEFORE LAUNCH.
 *
 * Every client name below is fictional by design. Do NOT substitute real brand
 * names here as filler: a staging link or screenshot that claims work for a real
 * company is a fabricated endorsement, and it travels further than you expect.
 * Replace each entry wholesale with a real, approved case study.
 *
 * Shapes are realistic so the layout is being tested against believable content
 * lengths — long client names, three-line summaries, and metric strings that
 * actually wrap are all represented here on purpose.
 */
export const PLACEHOLDER_CONTENT = true

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-beverages-harmattan",
    client: "Meridian Beverages",
    title: "A launch that owned the harmattan season",
    summary:
      "A five-market rollout for a new citrus line, anchored on street-level activation and radio in the languages people actually buy in.",
    division: "advertising",
    sector: "FMCG",
    markets: ["Nigeria", "Ghana", "Côte d'Ivoire"],
    year: 2025,
    services: ["Brand strategy", "Media buying", "Out-of-home", "Retail activation"],
    results: [
      { value: "3.2×", label: "Return on ad spend" },
      { value: "41%", label: "Lift in aided awareness" },
      { value: "1,800", label: "Retail outlets activated" },
    ],
    plate: { motif: "arc", tone: "clay" },
    featured: true,
    narrative: {
      challenge:
        "A citrus line launching into a category already crowded with incumbents, in three markets with very different retail structures and no shared media landscape. The brief assumed a single continental campaign. The research said that would fail in at least two of the three.",
      approach:
        "We built one strategic platform and three market-specific executions. Radio in Hausa, Twi and French carried the message where television reach was thin; the out-of-home buy concentrated on transit corridors rather than premium sites; and a retail activation programme put the product in hand at the point where the category decision is actually made.",
      outcome:
        "The line hit its twelve-month volume target in seven months. More usefully for the client, the market-by-market split produced a reusable model for how they enter their next three territories.",
    },
    deliverables: [
      "Brand platform and messaging framework",
      "Three localised campaign executions",
      "Radio production in four languages",
      "Transit and roadside out-of-home buy",
      "1,800-outlet retail activation programme",
    ],
    quote: {
      text: "They talked us out of the campaign we came in asking for, and they were right. That is worth more than any media discount.",
      name: "Placeholder Name",
      role: "Regional Marketing Director",
    },
  },
  {
    slug: "northwind-telecom-city-sessions",
    client: "Northwind Telecom",
    title: "Turning a data plan into a music franchise",
    summary:
      "We built a touring live-session series that gave a telecoms product a cultural reason to exist — then handed the brand a content library it still runs on.",
    division: "entertainment",
    sector: "Telecoms",
    markets: ["Nigeria", "Kenya"],
    year: 2025,
    services: ["Event production", "Talent partnerships", "Content production", "Social"],
    results: [
      { value: "12", label: "Cities toured" },
      { value: "28M", label: "Organic video views" },
      { value: "64%", label: "Of activations sold out" },
    ],
    plate: { motif: "weave", tone: "ochre" },
    featured: true,
    narrative: {
      challenge:
        "Data plans are indistinguishable on paper. The client had spent two years competing on price and had the margins to show for it. They needed a reason for a young audience to prefer them that a competitor could not simply undercut the following quarter.",
      approach:
        "Rather than sponsor someone else's festival, we built an owned property: an intimate live-session series in twelve cities, booking artists early in their break-out rather than at peak fee. Every night was filmed as social-native content, which meant the tour produced a media library rather than just an audience.",
      outcome:
        "The series is now in its second season and runs as a standing brand property. The content library continues to deliver reach months after each show, at no incremental media cost.",
    },
    deliverables: [
      "Franchise concept and brand architecture",
      "Twelve-city tour production",
      "Artist booking and talent negotiation",
      "Multi-camera film capture and post",
      "Social distribution strategy",
    ],
  },
  {
    slug: "atlas-financial-first-account",
    client: "Atlas Financial Group",
    title: "Making a first bank account feel like arriving",
    summary:
      "A youth-banking campaign that dropped the aspirational stock imagery and cast real customers, shot in their own neighbourhoods.",
    division: "advertising",
    sector: "Financial services",
    markets: ["Nigeria"],
    year: 2024,
    services: ["Creative direction", "Production", "Influencer strategy", "Performance media"],
    results: [
      { value: "180K", label: "Accounts opened in 90 days" },
      { value: "-37%", label: "Cost per acquisition" },
      { value: "2.1M", label: "Campaign engagements" },
    ],
    plate: { motif: "column", tone: "deep" },
    featured: true,
    narrative: {
      challenge:
        "Youth banking products in the market all looked the same: aspirational imagery, aspirational language, and an account opening flow that took nine days. The category had trained young customers to assume banks were not talking to them.",
      approach:
        "We cast actual customers instead of models and shot in their own neighbourhoods. The creative led with the moment of getting paid rather than the moment of getting rich. Alongside the campaign we pushed the client hard on the onboarding flow, because no amount of media buys around a nine-day wait.",
      outcome:
        "Account openings tripled against forecast, and acquisition cost fell by more than a third. The onboarding work was the unglamorous half of that result and probably the more important one.",
    },
    deliverables: [
      "Creative platform and campaign identity",
      "Documentary-style film and stills production",
      "Creator and influencer programme",
      "Performance media across paid social and search",
      "Onboarding funnel audit and recommendations",
    ],
    quote: {
      text: "The campaign was strong. The thing that actually moved the number was them refusing to stop talking about our sign-up flow.",
      name: "Placeholder Name",
      role: "Head of Retail Products",
    },
  },
  {
    slug: "kesari-films-continental-premiere",
    client: "Kesari Films",
    title: "A continental premiere run for an African feature",
    summary:
      "Press, partnerships and a six-city premiere tour that took an independent film from festival circuit to mainstream release.",
    division: "entertainment",
    sector: "Film & TV",
    markets: ["Nigeria", "South Africa", "Kenya", "Ghana"],
    year: 2024,
    services: ["Public relations", "Event production", "Media partnerships"],
    results: [
      { value: "6", label: "Premiere cities" },
      { value: "240+", label: "Press placements" },
      { value: "#1", label: "Opening weekend, home market" },
    ],
    plate: { motif: "eclipse", tone: "clay" },
    narrative: {
      challenge:
        "A well-reviewed independent feature with a festival record and almost no mainstream awareness, opening against a studio release. The distribution window was six weeks and the marketing budget was a fraction of the competing title's.",
      approach:
        "We ran press and partnerships instead of paid media. A six-city premiere tour created a local news moment in each market, and media partnerships traded coverage for premiere access rather than cash. The talent schedule was built around radio and daytime television, which reach the audience that actually buys cinema tickets in these markets.",
      outcome:
        "The film took the number one opening weekend slot in its home market and held a top-five position for three weeks, on a fraction of the competing spend.",
    },
    deliverables: [
      "Publicity strategy and press office",
      "Six-city premiere tour production",
      "Media partnership negotiation",
      "Talent media training and scheduling",
      "Red carpet and content capture",
    ],
  },
  {
    slug: "savanna-air-route-launch",
    client: "Savanna Air",
    title: "Selling a new route before the first flight",
    summary:
      "An airline route launch built on diaspora media, airport domination and a referral mechanic that did most of the work for us.",
    division: "advertising",
    sector: "Travel",
    markets: ["Nigeria", "United Kingdom"],
    year: 2024,
    services: ["Media strategy", "Out-of-home", "Diaspora marketing", "CRM"],
    results: [
      { value: "92%", label: "Load factor at launch" },
      { value: "5.4×", label: "Return on ad spend" },
      { value: "31%", label: "Bookings from referral" },
    ],
    plate: { motif: "weave", tone: "sand" },
    narrative: {
      challenge:
        "A new long-haul route with a fixed launch date, no route awareness on either end, and a load factor target that assumed a full aircraft from week one. Route launches fail quietly and expensively when the first month is empty.",
      approach:
        "We treated the diaspora as the primary market rather than a secondary one, buying community radio, places of worship and diaspora press in the UK alongside airport domination at both ends. A referral mechanic let early bookers earn credit for bringing others, which suited a route where people travel to see family in groups.",
      outcome:
        "The route launched at 92% load factor and held above 85% through the first quarter. Nearly a third of bookings came through referral, at effectively no media cost.",
    },
    deliverables: [
      "Route launch media strategy",
      "Diaspora media planning and buying",
      "Airport out-of-home domination, both ends",
      "Referral mechanic design and CRM build",
      "Launch week press and content",
    ],
  },
  {
    slug: "lumo-energy-switch",
    client: "Lumo Energy",
    title: "Explaining solar without saying the word solar",
    summary:
      "A behaviour-change campaign for home energy that led with the cost of a generator refill rather than the technology.",
    division: "advertising",
    sector: "Energy",
    markets: ["Nigeria", "Ghana"],
    year: 2023,
    services: ["Brand strategy", "Radio", "Community activation", "Performance media"],
    results: [
      { value: "76K", label: "Qualified installation leads" },
      { value: "2.8×", label: "Increase in consideration" },
      { value: "22", label: "Community roadshows" },
    ],
    plate: { motif: "arc", tone: "ochre" },
    narrative: {
      challenge:
        "Home solar had an education problem dressed up as a marketing problem. Prospective customers understood generators, understood fuel costs, and had no working mental model for what a solar installation was or what it cost to run.",
      approach:
        "We stopped leading with the technology. Every execution opened on the weekly cost of a generator refill — a number the audience already knew — and positioned the product as a way to stop paying it. Radio carried the argument, and twenty-two community roadshows let people see a working installation rather than imagine one.",
      outcome:
        "Consideration nearly tripled over the campaign period and the client took 76,000 qualified installation leads, enough to expand into a second market the following year.",
    },
    deliverables: [
      "Category and behaviour-change strategy",
      "Radio creative and production",
      "Twenty-two community roadshow activations",
      "Performance media and lead capture",
      "Sales team messaging toolkit",
    ],
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)

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
