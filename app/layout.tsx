import type { Metadata, Viewport } from "next"
import { Archivo, Fraunces, Geist_Mono } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * Display face. The SOFT/WONK axes are requested explicitly so we can dial the
 * "wonk" out in CSS — without declaring them, Google serves a file where only
 * `wght` varies and the font-variation-settings in globals.css would no-op.
 */
const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
})

const fontSans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF5ED" },
    { media: "(prefers-color-scheme: dark)", color: "#1A100C" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontDisplay.variable,
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body className="min-h-dvh">
        <ThemeProvider>
          <a
            href="#main"
            className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
