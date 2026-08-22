import type { Programme } from "./types"

/**
 * Standing programmes led by the firm's principals.
 *
 * Source: the "Masterclass with Dapo Adelegan" flyer, kept uncropped outside the
 * web root at the project root beside the other source documents,
 * read together with the CEO profile, which describes the "Life in the 21st
 * Century" lecture series as an ongoing programme rather than a one-off.
 *
 * The flyer advertised a single sitting on 3rd May 2025. That date, the running
 * order, the ₦200,000 fee, the Providus account details and the two personal
 * mobile numbers on it are all deliberately absent from this file: the date is
 * long past, and the account number and mobile numbers must not reach a public
 * page. Enquiries route through /contact so that material can be sent privately.
 *
 * ⚠️ For the same reason, do not use the flyer JPEG as a page image — the bank
 * details are part of the artwork. The curriculum below is typeset as HTML
 * instead, which is also the better outcome for search and for small screens.
 */
export const programmes: Programme[] = [
  {
    slug: "masterclass",
    name: "Masterclass with Dapo Adelegan",
    strapline: "The 21st Century Life",
    summary:
      "A one-day masterclass on what has actually changed about doing business this century, and what survives it. Built around a working session rather than a lecture, and closing with a bespoke advisory clinic on the delegate's own business.",
    host: "Prince Dapo Adelegan",
    hostProfileSlug: "dapo-adelegan",

    modules: [
      {
        title: "Life in the 21st Century",
        topics: [
          "An overview of the monumental changes of the last century, and the glimpse they give of life in this one",
        ],
      },
      {
        title: "The 21st Century Defined",
        topics: ["The Age of Unreason", "The Age of Paradox"],
      },
      {
        title: "Solutions to the Challenges of the 21st Century",
        topics: [
          "The Obituary",
          "The Doughnut Principle",
          "The Principle of the Second Curve",
        ],
      },
      {
        title: "Business Survival Matrix",
        topics: [
          "Applying the frameworks to the delegate's own operating position",
        ],
      },
    ],

    format: [
      "Two lecture phases, run as interactive sessions",
      "A bespoke business advisory clinic on your own business",
      "Tea break and lunch",
    ],

    venue: "The Metropolitan Club, 15 Kofo Abayomi Street, Victoria Island, Lagos",

    /**
     * The programme's own flyer, cropped at 763×797 from the 763×1080 original.
     *
     * The cut sits immediately below the "Interactive Sessions" band, which is
     * where the fee, the Providus account details and the two personal mobile
     * numbers begin. Everything that gives the flyer its identity — the title,
     * the 21st Century Life mark, the full module list and the portrait — is
     * above the cut and intact.
     *
     * The uncropped original is kept outside the web root, beside the other
     * source documents at the project root, so it is never served.
     */
    image: {
      src: "/assets/masterclass-flyer.jpeg",
      alt: "Masterclass with Dapo Adelegan flyer, listing the four modules of The 21st Century Life programme.",
      width: 763,
      height: 797,
    },

    /* Not optional. The Age of Unreason (1989), The Age of Paradox (1994) and
       The Second Curve (2015) are Charles Handy's books, and the inside-out
       doughnut is his image from The Empty Raincoat. Running the syllabus under
       a named consultant's brand without saying so reads as passing off — and
       naming the source makes the programme look better read, not less
       original. */
    attribution:
      "The frameworks in the second and third modules draw on the work of the management writer Charles Handy, The Age of Unreason, The Age of Paradox, and The Second Curve.",
  },
]

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug)
}
