"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

/**
 * Theme toggle driven entirely by CSS rather than a `mounted` state flag.
 *
 * next-themes writes `.dark` onto <html> before paint, so both icons can be
 * rendered and swapped with `dark:` variants. That avoids the usual
 * mount-effect-then-setState dance (which React 19 flags, and which causes an
 * icon flash on first paint). The label describes the control, not the current
 * state, so it stays correct without JS.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className={cn(
        "text-foreground/70 hover:text-foreground hover:border-input focus-visible:ring-ring inline-flex size-11 cursor-pointer items-center justify-center rounded-sm border border-transparent transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
    >
      <Moon className="size-[1.15rem] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[1.15rem] dark:block" aria-hidden="true" />
    </button>
  )
}
