import type { OohFormat } from "./types"

/**
 * The out-of-home inventory, indexed by format.
 *
 * Photographs are the company's own monitoring shots, supplied August 2026 and
 * grouped by the client into billboards, poles and campus shelters. Two
 * decisions carried through from that hand-off:
 *
 *  1. The GPS Map Camera stamps are left on deliberately. They are burned into
 *     the pixels, and they are the argument — a dated, geotagged photograph of
 *     a live site is what separates a media owner who verifies from one who
 *     invoices. `captured` repeats the date in text so it is searchable and
 *     readable when the stamp is small.
 *  2. Advertisers are named. Every placement below is a public structure
 *     photographed from a public road, and the client confirmed naming them.
 *     Note this is a wider policy than /work applies to case studies, where
 *     `clientCleared` still gates the commercial names.
 *
 * Two files were held back to `_assets-held-back/` at the project root rather
 * than published: a Nova Bank board that only exists as a photograph of a slide
 * (with "Ikoyi" misspelled in the baked-in title and the creative defaced by a
 * scrawl), and a Betway shelter whose panel carries a visible alamy stock
 * watermark.
 */
export const oohFormats: OohFormat[] = [
  {
    slug: "billboard",
    name: "Billboards",
    definition: "Large-format roadside boards, 48-sheet and above.",
    description:
      "The workhorse of Nigerian outdoor. A billboard buys you dwell time in traffic that no other channel gets close to, which is why the sites that matter are held on long leases and rarely come free. We buy, produce, install and then photograph what went up.",
    strengths: [
      "Longest dwell time in stationary traffic",
      "Room for a full proposition, not just a logo",
      "Premium corridors held on standing leases",
    ],
    placements: [
      {
        src: "/assets/ooh/billboards/lekki-free-zone-20th-anniversary.jpeg",
        alt: "Lekki Free Zone 20th anniversary billboard on a Lagos roadside, reading Africa's leading Industrial Ecosystem.",
        width: 1280,
        height: 631,
        client: "Lekki Free Zone",
        location: "Lagos",
      },
      {
        src: "/assets/ooh/billboards/ciod-victoria-island.jpeg",
        alt: "Chartered Institute of Directors Nigeria billboard reading Come Sit With Big Thinkers, on Victoria Island.",
        width: 1280,
        height: 959,
        client: "Chartered Institute of Directors Nigeria",
        location: "Victoria Island, Lagos",
        captured: "19 February 2026",
      },
      {
        src: "/assets/ooh/billboards/vetiva-lekki-epe-expressway.jpeg",
        alt: "Vetiva billboard on the Lekki-Epe Expressway listing advisory, trust, wealth management and securities trading.",
        width: 1280,
        height: 960,
        client: "Vetiva",
        location: "Lekki–Epe Expressway, Eti-Osa, Lagos",
        captured: "31 March 2026",
      },
      {
        src: "/assets/ooh/billboards/ecovillas-lakowe-lekki-epe.jpeg",
        alt: "EcoVillas billboard advertising homes at Lakowe Lakes Golf and Country Estate, seen across queued traffic.",
        width: 1280,
        height: 720,
        client: "EcoVillas, Lakowe Lakes",
        location: "Lekki–Epe Expressway, Eti-Osa, Lagos",
        captured: "16 April 2026",
      },
      {
        src: "/assets/ooh/billboards/fountain-havens-sanusi-fafunwa.jpeg",
        alt: "Fountain Havens billboard reading Built Well, Delivered On Time, off Sanusi Fafunwa Street.",
        width: 1280,
        height: 720,
        client: "Fountain Havens",
        location: "Off Sanusi Fafunwa Street, Eti-Osa, Lagos",
        captured: "11 February 2026",
      },
      {
        src: "/assets/ooh/billboards/page-financials-wahab-ogunbambi.jpeg",
        alt: "Page Financials billboard reading Got BIG Plans? Get BIGGER Support, on a quiet Lagos road.",
        width: 1080,
        height: 606,
        client: "Page Financials",
        location: "Wahab Ogunbambi Close, Eti-Osa, Lagos",
        captured: "23 May 2026",
      },
      {
        src: "/assets/ooh/billboards/ginjabet-victoria-island.jpeg",
        alt: "GinjaBet billboard on Victoria Island, photographed with a dated site-verification card held to camera.",
        width: 1280,
        height: 960,
        client: "GinjaBet",
        location: "Victoria Island, Lagos",
        captured: "13 October 2025",
      },
      {
        src: "/assets/ooh/billboards/jobberman-jakande-gantry.jpeg",
        alt: "Jobberman panel mounted on a road gantry above the Lekki-Epe Expressway at Jakande roundabout.",
        width: 1280,
        height: 960,
        client: "Jobberman",
        location: "Jakande Roundabout, Eti-Osa, Lagos",
        captured: "3 July 2026",
      },
      {
        src: "/assets/ooh/billboards/opebi-corridor-lagos.jpeg",
        alt: "A run of billboards along the Opebi corridor in Lagos at first light, several sites in one view.",
        width: 2080,
        height: 1560,
        client: "Opebi corridor",
        location: "Opebi, Lagos",
        captured: "24 July 2026",
        secondary: true,
      },
      {
        src: "/assets/ooh/billboards/mulberry-partners.jpeg",
        alt: "Mulberry Partners billboard about cash flow support, raised above a Lagos road.",
        width: 999,
        height: 588,
        client: "Mulberry Partners",
        location: "Lagos",
        secondary: true,
      },
      {
        src: "/assets/ooh/billboards/fountain-havens-sanusi-fafunwa-wide.jpeg",
        alt: "Wider view of the Fountain Havens billboard off Sanusi Fafunwa Street, with traffic passing.",
        width: 1280,
        height: 720,
        client: "Fountain Havens",
        location: "Off Sanusi Fafunwa Street, Eti-Osa, Lagos",
        captured: "11 February 2026",
        secondary: true,
      },
      {
        src: "/assets/ooh/billboards/lekki-free-zone-expressway.jpeg",
        alt: "Lekki Free Zone billboard seen through haze above expressway traffic.",
        width: 926,
        height: 500,
        client: "Lekki Free Zone",
        location: "Lagos",
        secondary: true,
      },
    ],
  },

  {
    slug: "uni-pole",
    name: "Uni-poles",
    definition: "A single board carried on one column, standing clear of everything around it.",
    description:
      "Where a billboard competes for attention in a cluttered streetscape, a uni-pole is engineered to stand alone. The single column lifts the face above tree line and rooftop, which makes it the format of choice on approach roads, ring roads and the open stretches into a city where sightlines run long.",
    strengths: [
      "Visible from several hundred metres out",
      "No surrounding clutter competing for the eye",
      "Suits approach roads and open corridors",
    ],
    placements: [
      {
        src: "/assets/ooh/uni-pole/lakowe-heights-adm-media.jpeg",
        alt: "Lakowe Heights uni-pole advertising premium apartments, with riggers working on the deck above the face.",
        width: 1280,
        height: 960,
        client: "Lakowe Heights, Mixta Africa",
        location: "Lagos",
      },
      {
        /* Cropped from a phone screenshot — the only frame we hold of this site,
           so it tops out at 561px wide. Render it at card size and no larger. */
        src: "/assets/ooh/uni-pole/vetiva-abuja.jpeg",
        alt: "Vetiva uni-pole standing in open parkland on an Abuja approach road.",
        width: 561,
        height: 422,
        client: "Vetiva",
        location: "Abuja",
        secondary: true,
      },
    ],
  },

  {
    slug: "median-pole",
    name: "Median poles",
    definition: "Runs of panels mounted along the central reservation of a dual carriageway.",
    description:
      "Median poles work as a sequence rather than as single sites. A driver passes twenty faces in under a minute, and the repetition does the work that one board cannot — which makes the format unusually strong for a product launch or a single, simple claim. Both carriageways see the run.",
    strengths: [
      "Repetition across a whole corridor, not one site",
      "Seen by traffic in both directions",
      "Built for one simple, repeated message",
    ],
    placements: [
      {
        src: "/assets/ooh/median-pole/viva-dishwashing-lagos.jpeg",
        alt: "A long run of Viva dishwashing liquid median poles down the central reservation of a Lagos dual carriageway, shaped as the bottle.",
        width: 1024,
        height: 1280,
        client: "Viva",
        location: "Lagos",
      },
      {
        /* ⚠️ Provenance to confirm with the client. The road furniture,
           vegetation and vehicles in this frame do not read as Nigerian, and
           the image is widely circulated. Flagged twice in review and kept in
           on the client's instruction — get the site and date before launch. */
        src: "/assets/ooh/median-pole/airtel-3g.jpeg",
        alt: "A run of red Airtel 3G median poles along a landscaped central reservation.",
        width: 929,
        height: 405,
        client: "Airtel",
        location: "Site and date to be confirmed",
        secondary: true,
      },
    ],
  },

  {
    slug: "side-pole",
    name: "Side poles",
    definition: "Banner panels on the street-light columns along the edge of a carriageway.",
    description:
      "The roadside equivalent of a median run, and often the only option where the central reservation is planted or too narrow to build on. Side poles sit closer to the near-side lane and to pedestrians, so they carry more detail than a median panel can — enough for a line of copy and an image, not just a pack shot.",
    strengths: [
      "Works where a median cannot be built on",
      "Close enough to the kerb for real copy",
      "Reaches pedestrians as well as drivers",
    ],
    placements: [
      {
        src: "/assets/ooh/side-pole/abuja-expressway-banners.jpeg",
        alt: "Banner panels on street-light columns along an Abuja expressway, carrying a small business campaign.",
        width: 1080,
        height: 1080,
        client: "Small business campaign",
        location: "Abuja",
        captured: "28 April 2026",
      },
    ],
  },

  {
    slug: "campus-shelter",
    name: "Campus shelters",
    definition: "Branded bus shelters inside university campuses.",
    description:
      "A network of shelters at the University of Ilorin, Obafemi Awolowo University and the University of Nigeria, Nsukka — bus terminus, car park and faculty stops. It is one of the few formats that reaches a student audience where they actually wait, standing still, several times a day, and it is closed inventory: there is no competing clutter inside a campus gate.",
    strengths: [
      "A student audience, captive at the stop",
      "No competing outdoor inside the campus",
      "Terminus, car park and faculty sites",
    ],
    placements: [
      {
        src: "/assets/ooh/campus-shelter/moniepoint-unn-car-park.jpeg",
        alt: "Campus bus shelter at the University of Nigeria Nsukka car park, shown with indicative Moniepoint creative.",
        width: 1920,
        height: 1080,
        client: "Moniepoint",
        location: "Car park, University of Nigeria, Nsukka",
        indicative: true,
      },
      {
        src: "/assets/ooh/campus-shelter/moniepoint-unilorin.jpeg",
        alt: "Campus bus shelter at the University of Ilorin, shown with indicative Moniepoint creative.",
        width: 960,
        height: 540,
        client: "Moniepoint",
        location: "University of Ilorin",
        indicative: true,
      },
      {
        src: "/assets/ooh/campus-shelter/betway-unn-works-department.jpeg",
        alt: "Campus bus shelter at the University of Nigeria Nsukka works department, shown with indicative Betway creative.",
        width: 1545,
        height: 1484,
        client: "Betway",
        location: "Works Department, University of Nigeria, Nsukka",
        indicative: true,
      },
      {
        src: "/assets/ooh/campus-shelter/betway-unilorin.jpeg",
        alt: "Campus bus shelter at the University of Ilorin, shown with indicative Betway creative.",
        width: 1080,
        height: 816,
        client: "Betway",
        location: "University of Ilorin",
        indicative: true,
      },
      {
        src: "/assets/ooh/campus-shelter/moniepoint-verve-oau-ife.jpeg",
        alt: "Campus bus shelter at Obafemi Awolowo University Ife, shown with indicative Moniepoint Verve card creative.",
        width: 960,
        height: 540,
        client: "Moniepoint",
        location: "Obafemi Awolowo University, Ife",
        indicative: true,
        secondary: true,
      },
      {
        src: "/assets/ooh/campus-shelter/betway-oau-ife.jpeg",
        alt: "Campus bus shelter at Obafemi Awolowo University Ife, shown with indicative Betway creative.",
        width: 1080,
        height: 762,
        client: "Betway",
        location: "Obafemi Awolowo University, Ife",
        indicative: true,
        secondary: true,
      },
      {
        src: "/assets/ooh/campus-shelter/betway-oau-ife-roadside.jpeg",
        alt: "Roadside campus bus shelter at Obafemi Awolowo University Ife, shown with indicative Betway creative.",
        width: 1080,
        height: 1003,
        client: "Betway",
        location: "Obafemi Awolowo University, Ife",
        indicative: true,
        secondary: true,
      },
      {
        src: "/assets/ooh/campus-shelter/fastcredit-campus-network.jpeg",
        alt: "Six campus shelters across Ilorin, Ife and Nsukka shown together with indicative FastCredit branding.",
        width: 925,
        height: 1280,
        client: "FastCredit",
        location: "Ilorin, Ife and Nsukka",
        indicative: true,
        secondary: true,
      },
    ],
  },

  {
    /* No photography held. Listed because the company sells the format and a
       services page that omits what it sells is the wrong kind of modest —
       see the same reasoning in capabilities.ts. The page renders these as
       text cards; drop files into /assets/ooh/digital-board/ and add
       placements to turn it into a gallery, no component change needed. */
    slug: "digital-board",
    name: "Digital boards",
    definition: "LED faces running a rotating slot rather than a pasted sheet.",
    description:
      "A digital face sells a share of time instead of a share of wall, which changes what the format is for: creative can change by daypart, a campaign can go live the same afternoon it is signed off, and a burst can run for a week without the cost of production and posting. It is the right buy for anything with a date on it.",
    strengths: [
      "Creative can change by time of day",
      "Live within hours, not a posting cycle",
      "No print or posting cost per change",
    ],
    placements: [],
  },

  {
    slug: "flag-pole",
    name: "Flag poles",
    definition: "Runs of printed flags, used to brand a frontage or an approach.",
    description:
      "Flags do a job the rigid formats cannot: they mark a boundary. A run along a frontage, an approach road or an event perimeter tells you that you have arrived somewhere, which is why they carry activations, conferences and campus and corporate entrances more often than they carry a product message.",
    strengths: [
      "Defines an entrance or a perimeter",
      "Fast to install and to strike",
      "Suits events and activations",
    ],
    placements: [],
  },
]

export function getOohFormat(slug: string) {
  return oohFormats.find((format) => format.slug === slug)
}

/** Formats we can actually show, for galleries and the home page strip. */
export const photographedFormats = oohFormats.filter(
  (format) => format.placements.length > 0
)

/**
 * The lead image for each photographed format — the first non-secondary
 * placement. Used by the home page strip, which shows one frame per format.
 */
export const formatShowcase = photographedFormats.map((format) => ({
  format,
  lead: format.placements.find((p) => !p.secondary) ?? format.placements[0],
}))
