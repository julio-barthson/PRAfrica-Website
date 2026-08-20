import { CapabilitiesSection } from "@/components/home/capabilities-section"
import { ClientWall } from "@/components/home/client-wall"
import { ContactCta } from "@/components/home/contact-cta"
import { FeaturedWork } from "@/components/home/featured-work"
import { Hero } from "@/components/home/hero"
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
      <TestimonialSection />
      <ContactCta />
    </>
  )
}
