import { cn } from "@/lib/utils"

/**
 * The single source of truth for page gutters. Every section uses this — mixing
 * container widths is the fastest way to make a marketing site feel unbuilt.
 */
export function Container({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "wide" | "prose" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[100rem]",
        size === "prose" && "max-w-3xl",
        className
      )}
      {...props}
    />
  )
}
