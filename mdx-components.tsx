import type { MDXComponents } from "mdx/types"

/**
 * Global MDX element mapping. Required by @next/mdx with the App Router.
 *
 * Article prose is styled here rather than with a typography plugin so the
 * measure, rhythm and display face match the rest of the site exactly — a
 * generic prose stylesheet would quietly reintroduce a second type system.
 */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-14 mb-4 text-[clamp(1.65rem,3.2vw,2.25rem)] leading-tight font-semibold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="font-display mt-10 mb-3 text-xl font-semibold sm:text-2xl" {...props} />
  ),
  p: (props) => (
    <p className="text-muted-foreground mt-5 text-base leading-relaxed" {...props} />
  ),
  ul: (props) => (
    <ul
      className="text-muted-foreground mt-5 flex list-disc flex-col gap-2.5 pl-5 leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-muted-foreground mt-5 flex list-decimal flex-col gap-2.5 pl-5 leading-relaxed"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  a: (props) => (
    <a
      className="text-accent-strong link-rule focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
      {...props}
    />
  ),
  strong: (props) => <strong className="text-foreground font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-primary font-display text-foreground my-8 border-l-2 pl-6 text-xl leading-snug font-medium"
      {...props}
    />
  ),
  hr: () => <hr className="border-border my-12" />,
  code: (props) => (
    <code
      className="bg-muted text-foreground rounded-sm px-1.5 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
