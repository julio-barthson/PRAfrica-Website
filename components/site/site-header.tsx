"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Container } from "@/components/site/container"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { Wordmark } from "@/components/site/wordmark"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

/** Subscribe/snapshot pair for the window scroll position. */
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}
const getScrolled = () => window.scrollY > 16
/** The server has no scroll position; assume the top of the page. */
const getScrolledOnServer = () => false

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)

  // Solid background only once the hero has scrolled under the bar, so the
  // header reads as part of the hero at rest. useSyncExternalStore is the right
  // tool for reading browser state — it gets the initial value without an
  // effect, so there's no first-paint flash of the wrong variant.
  const scrolled = React.useSyncExternalStore(
    subscribeToScroll,
    getScrolled,
    getScrolledOnServer
  )

  // Close on route change — otherwise the panel survives navigation. Adjusting
  // state during render is React's documented alternative to a route-change
  // effect, and unlike an onClick on each link it also covers back/forward.
  const [lastPath, setLastPath] = React.useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (open) setOpen(false)
  }

  // Escape to dismiss, and lock the page behind the panel.
  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)

    // Capture the node now — by cleanup time the ref may point elsewhere.
    const trigger = triggerRef.current

    // Move focus into the panel so keyboard users aren't left behind the overlay.
    panelRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      // Return focus to the control that opened it.
      trigger?.focus()
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-colors duration-300",
        scrolled
          ? "bg-background/85 border-border border-b backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          aria-label={`${site.name} — home`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-rule focus-visible:ring-ring text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="xl" className="hidden lg:inline-flex">
            <Link href="/contact">Start a project</Link>
          </Button>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-foreground hover:border-input focus-visible:ring-ring inline-flex size-11 cursor-pointer items-center justify-center rounded-sm border border-transparent transition-colors focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          tabIndex={-1}
          className="bg-background border-border fixed inset-x-0 top-20 bottom-0 z-40 border-t focus:outline-none lg:hidden"
        >
          <Container className="flex h-full flex-col justify-between py-10">
            <nav aria-label="Mobile" className="flex flex-col">
              {site.nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-border font-display focus-visible:ring-ring border-b py-5 text-3xl font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span className="text-accent-strong mr-4 font-sans text-xs font-semibold tabular-nums">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-5">
              <Button asChild size="2xl" className="w-full">
                <Link href="/contact">Start a project</Link>
              </Button>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {site.contact.email}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
