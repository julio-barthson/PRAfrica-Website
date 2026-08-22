import { CapabilitiesSection } from "@/components/home/capabilities-section"
import { ClientWall } from "@/components/home/client-wall"
import { ContactCta } from "@/components/home/contact-cta"
import { FeaturedWork } from "@/components/home/featured-work"
import { Hero } from "@/components/home/hero"
import { LeadershipSection } from "@/components/home/leadership-section"
import { TestimonialSection } from "@/components/home/testimonial-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientWall />
      {/* Work sits above capabilities deliberately. This is a visual agency and
          the campaign photography is the argument — running three sections of
          type before the first photograph made a visitor read the pitch before
          seeing any proof of it. */}
      <FeaturedWork />
      <CapabilitiesSection />
      {/* Placed after the capability pitch and before the endorsement, so the
          page runs proof → what we do → who runs it → what a client said. The
          testimonial and the contact CTA close as a pair and are not split. */}
      <LeadershipSection />
      <TestimonialSection />
      <ContactCta />
    </>
  )
}
