export const site = {
  name: "PRAfrica",
  /** Used in the <title> template and OG tags. */
  legalName: "PRAfrica Media",
  tagline: "Advertising & entertainment, built for African markets.",
  description:
    "PRAfrica is an advertising and entertainment company partnering with international and local brands to build campaigns, events and cultural moments across Africa.",
  /**
   * ⚠️ ASSUMPTION — confirm before launch.
   * Inferred from the email domain in .env (prafricalimited.com). Everything
   * canonical derives from this: OG image URLs, the sitemap and metadataBase.
   * If the site is served from a different domain, change it here only.
   */
  url: "https://prafricalimited.com",
  locale: "en_NG",

  /**
   * Public contact details, so they live here rather than in .env — they are
   * rendered into the footer on every page and are not secrets. The env file
   * keeps the Mailjet credentials and the internal admin/sender addresses.
   */
  contact: {
    email: "info@prafricalimited.com",
    phone: "+234 806 483 9141",
    address: "Lagos, Nigeria",
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
