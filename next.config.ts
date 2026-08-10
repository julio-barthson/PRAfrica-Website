import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Article bodies live in .mdx files under content/insights/.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
