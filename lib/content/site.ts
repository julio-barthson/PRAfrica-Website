export const site = {
  name: "PRAfrica",
  /** Used in the <title> template and OG tags. */
  legalName: "PR Africa International Limited",
  /** The company's own line, in use since at least 1999. */
  tagline: "Selling Africa to the World",
  description:
    "PR Africa International is an integrated marketing communications company handling country branding, trade and investment promotion, public relations and political advocacy for public and private sector organisations across Africa.",
  /**
   * ⚠️ ASSUMPTION — confirm before launch.
   * Inferred from the email domain in .env (prafricalimited.com). Everything
   * canonical derives from this: OG image URLs, the sitemap and metadataBase.
   * If the site is served from a different domain, change it here only.
   *
   * Note the conflict: the company profile gives the CEO's address as
   * ceo@prafricalimited.com and points to prafricalimited.com, because PRAfrica is
   * one of three companies in the PRAfrica Limited alongside PRAfrica Limited and
   * MediaStar. Confirm which entity this site represents.
   */
  url: "https://prafricalimited.com",
  locale: "en_NG",

  /**
   * Public contact details, so they live here rather than in .env — they are
   * rendered into the footer on every page and are not secrets. The env file
   * keeps the Mailjet credentials and the internal admin/sender addresses.
   *
   * ⚠️ The profile lists 0805 700 0007 / 0703 700 0007, but those are the CEO's
   * direct lines rather than a switchboard, so they are not published here.
   * Confirm a main line and a general enquiries address before launch.
   *
   * Address is the most recent of the three in the profile (2017); the earlier
   * two — Jibowu, Yaba (2004) and Omole Phase 1 (2013) — are historic.
   */
  contact: {
    email: "c.fajobiprafricalimited.com",
    phone: ["+234 803 273 4830", "+234 703 700 0007"],
    address: "17a Aroyewun Crescent off Ramat Road Ogudu GRA Lagos",
  },

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],

  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
} as const
