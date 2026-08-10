import type { TeamMember } from "./types"

/**
 * ⚠️ PLACEHOLDER — replace with real people, real roles and real photography.
 *
 * Names are intentionally generic rather than invented-but-plausible: an About
 * page is the one place where a realistic fake name could be mistaken for a real
 * employee. Photography replaces the generated plates here first — agencies sell
 * people, and this is the page where that matters most.
 */
export const team: TeamMember[] = [
  {
    name: "Placeholder Name",
    role: "Founder & Chief Executive",
    bio: "Twenty years across agency and client side, with a habit of asking what the business actually needs before anyone opens a design file.",
    plate: { motif: "eclipse", tone: "clay" },
  },
  {
    name: "Placeholder Name",
    role: "Managing Director, Advertising",
    bio: "Runs strategy and media. Has bought airtime in more markets than most people have visited.",
    plate: { motif: "column", tone: "ochre" },
  },
  {
    name: "Placeholder Name",
    role: "Managing Director, Entertainment",
    bio: "Producer by training. Responsible for the tours, premieres and launches actually happening on the night.",
    plate: { motif: "arc", tone: "deep" },
  },
  {
    name: "Placeholder Name",
    role: "Executive Creative Director",
    bio: "Leads creative across both divisions and keeps the work from sounding like it was written in another continent.",
    plate: { motif: "weave", tone: "clay" },
  },
]

/** Territories with in-country teams or standing partners. */
export const markets = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Côte d'Ivoire",
  "Senegal",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Zambia",
  "Cameroon",
  "Ethiopia",
  "Morocco",
  "Egypt",
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
      "Creative, film, events and activation — produced in-market with local crews and local permits.",
  },
  {
    title: "Run & report",
    description:
      "Live campaign management with reporting against the numbers agreed at the start, including the ones that did not move.",
  },
]
