import type { Capability, Client, Stat, Testimonial } from "./types"

/** ⚠️ Metrics, clients and quotes below are PLACEHOLDER. See work.ts. */

export const capabilities: Capability[] = [
  {
    title: "Brand & Campaign Strategy",
    description:
      "Positioning, messaging and the campaign architecture that comes before anyone opens a design file.",
    division: "advertising",
    offerings: ["Market entry strategy", "Brand positioning", "Campaign planning", "Consumer research"],
  },
  {
    title: "Media Planning & Buying",
    description:
      "Paid media across broadcast, out-of-home, radio, print and digital — planned and negotiated in-market.",
    division: "advertising",
    offerings: ["Media strategy", "Buying & negotiation", "Performance media", "Attribution reporting"],
  },
  {
    title: "Public Relations",
    description:
      "Earned coverage, reputation management and the press relationships that make a launch land.",
    division: "advertising",
    offerings: ["Media relations", "Press events", "Crisis communications", "Executive profiling"],
  },
  {
    title: "Event Production",
    description:
      "Concerts, launches, premieres and brand experiences — produced end to end, permits included.",
    division: "entertainment",
    offerings: ["Concept & creative", "Venue & logistics", "Technical production", "Sponsorship sales"],
  },
  {
    title: "Talent & Culture Partnerships",
    description:
      "Brokering the artist, creator and cultural partnerships that give a brand somewhere real to stand.",
    division: "entertainment",
    offerings: ["Talent brokerage", "Creator campaigns", "Music & film partnerships", "Ambassador programmes"],
  },
  {
    title: "Content Production",
    description:
      "Film, photography and social-native content shot on the continent with local crews.",
    division: "entertainment",
    offerings: ["Commercial film", "Photography", "Social content", "Post-production"],
  },
]

export const stats: Stat[] = [
  { value: "14", label: "African markets", note: "with in-country teams or partners" },
  { value: "200+", label: "Campaigns delivered", note: "since 2016" },
  { value: "60+", label: "Brands advised", note: "local and international" },
  { value: "9", label: "Industry awards", note: "regional and continental" },
]

export const clients: Client[] = [
  { name: "Meridian Beverages", sector: "FMCG" },
  { name: "Northwind Telecom", sector: "Telecoms" },
  { name: "Atlas Financial", sector: "Banking" },
  { name: "Savanna Air", sector: "Travel" },
  { name: "Kesari Films", sector: "Film & TV" },
  { name: "Lumo Energy", sector: "Energy" },
  { name: "Harborline Logistics", sector: "Logistics" },
  { name: "Adaeze Cosmetics", sector: "Beauty" },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "We had agencies who could talk about Africa and agencies who could actually operate here. PRAfrica were the only ones who did both — and they were the only ones who told us which of our assumptions were wrong.",
    name: "Placeholder Name",
    role: "Regional Marketing Director",
    company: "International FMCG brand",
  },
  {
    quote:
      "They ran a twelve-city tour without a single missed date. In this market that is not a small thing — it is the whole thing.",
    name: "Placeholder Name",
    role: "Head of Brand",
    company: "Telecoms operator",
  },
]
