import type { LeaderProfile } from "./types"

/**
 * Long-form profiles for named individuals.
 *
 * Source: `Profile-Dapo Adelegan Original (2).docx`, supplied by the client
 * (August 2026), cross-read against the company profile PDF for the dates it
 * leaves open. Every claim below traces to one of those two documents.
 *
 * Two deliberate omissions from the source:
 *
 *  1. The source opens with a full date of birth. Day and month are personal
 *     data with no editorial purpose on a corporate site, so only the year is
 *     published.
 *  2. Anything the source states without a date or an awarding body is held in
 *     `unverified` rather than rendered. See the notes on that field below —
 *     they are the open questions for the client, not decoration.
 */
export const leaderProfiles: LeaderProfile[] = [
  {
    slug: "dapo-adelegan",
    name: "Prince Dapo Adelegan",
    role: "President & Chief Executive Officer",
    headline:
      "A marketer and public relations consultant whose work has put Nigerian brands, and Nigeria itself, in front of international audiences for close to four decades.",

    /* Chosen for the home page: one standing office, one founding, one piece of
       delivered work — rather than three of the same kind. */
    highlights: [
      "14th President & Chairman of Council, Nigeria British Chamber of Commerce",
      "Founded Lekki Sunsplash, 1988",
      "Led the Nigeria @ 50 placement on the Heathrow Express, 2010",
    ],

    biography: [
      "Prince Adedapo Oluwaseyi Adelegan, known as Dapo, was born in Lagos in 1962 and educated at Ladi-lak Institute in Yaba, then at CMS Grammar School, Lagos, where he took his O levels, and the School of Arts and Science in Ikare, Ondo State, for his A levels. He graduated from the University of Ilorin in 1987 with a BA Hons in English Language.",
      "He has returned to formal study twice since, both times at the Lagos Business School: the Owner Manager Programme in 2002 and the Chief Executive Programme in 2012. He has taken further management training in South Africa, Spain, the United Kingdom and the United States.",
      "His entrepreneurship began with Lekki Sunsplash in 1988, a festival that opened up Nigeria's live music economy and set a template for talent discovery the industry worked from for years afterwards. In the period that followed he took the Made-In-Nigeria Exhibition to the United Kingdom and South Africa, putting Nigerian manufacturers in front of foreign buyers and building the trade relationships that came with the exposure.",
      "In 2002 he introduced electronic outdoor advertising to Nigeria. Eight years later the Federal Ministry of Information and Communications named him as leading the team behind the Nigeria @ 50 placement on the Heathrow Express, thirty panels carrying the country's rebranding campaign along the corridor most arriving business travellers use.",
      "Alongside the commercial work he runs the Life in the 21st Century lecture series, teaching leadership and entrepreneurship to Nigerian youths, and argues the Made-In-Nigeria case in public. He is married with children.",
    ],

    education: [
      {
        qualification: "Primary education",
        institution: "Ladi-lak Institute, Yaba",
      },
      { qualification: "O levels", institution: "CMS Grammar School, Lagos" },
      {
        qualification: "A levels",
        institution: "School of Arts and Science, Ikare, Ondo State",
      },
      {
        qualification: "BA Hons, English Language",
        institution: "University of Ilorin",
        year: 1987,
      },
      {
        qualification: "Owner Manager Programme",
        institution: "Lagos Business School",
        year: 2002,
      },
      {
        qualification: "Chief Executive Programme",
        institution: "Lagos Business School",
        year: 2012,
      },
    ],

    milestones: [
      {
        year: "1988",
        title: "Founded Lekki Sunsplash",
        detail:
          "The festival that opened Nigeria's live music economy to organised talent discovery.",
      },
      {
        year: "1999–2006",
        title: "Made-In-Nigeria Exhibition, UK and South Africa",
        detail:
          "Delivered with the Nigerian Export Promotion Council and the Nigerian Investment Promotion Commission.",
      },
      {
        year: "2002",
        title: "Introduced electronic outdoor advertising to Nigeria",
      },
      {
        year: "2010",
        title: "Nigeria @ 50, Heathrow Express",
        detail:
          "Named by the Federal Ministry of Information and Communications as leading the team behind the placement.",
      },
    ],

    appointments: [
      {
        role: "President & Chief Executive Officer",
        org: "PR Africa",
        current: true,
      },
      { role: "Chairman", org: "Celtron Group", current: true },
      {
        role: "14th President & Chairman of Council",
        org: "Nigeria British Chamber of Commerce",
        current: true,
      },
      { role: "President", org: "Abuja Business Club", current: true },
      {
        role: "Chairman",
        org: "Dreamworks Integrated Systems Limited",
        current: true,
      },
      { role: "Chairman", org: "Dradrock Real Estate Limited", current: true },
      {
        role: "Chairman",
        org: "Creative Zone Advertising Limited",
        current: true,
      },
      { role: "Chairman", org: "Maxx Connections Limited", current: true },
      {
        role: "Chairman",
        org: "Ondo State Lawn Tennis Association",
        current: true,
      },
    ],

    honours: [
      { title: "Fellow", awarder: "Nigerian Institute of Direct Marketing" },
      { title: "Fellow", awarder: "Institute of Directors" },
      { title: "Music Promoter of the Year", awarder: "PMAN" },
      {
        title: "Nigeria Entrepreneur of the Year",
        awarder: "Success Digest",
        year: 2007,
      },
    ],

    /**
     * ⚠️ Open with the client before launch. None of these render.
     */
    unverified: [
      "NBCC presidency is undated in the source and written in the present tense. Confirm whether the term is current or whether this should read 'immediate past President'; if current, get the term years.",
      "Source calls him both 'Group Managing Director' of Celtron Group and 'Chairman of Celtron Group' in the same paragraph. Published as Chairman — confirm which is right.",
      "Source says Celtron is in its '25th year of excellence' with no founding year, so the figure silently ages. Omitted pending a founding year.",
      "'One of Nigeria's top 50 marketing experts' has no awarding body, publication or year in the source. Omitted — an unattributed ranking is not publishable.",
      "PMAN Music Promoter of the Year is described as consecutive wins but no years are given. Published without a year; get the years or drop the 'consecutive' claim.",
    ],
  },
]

export function getLeaderProfile(slug: string) {
  return leaderProfiles.find((profile) => profile.slug === slug)
}
