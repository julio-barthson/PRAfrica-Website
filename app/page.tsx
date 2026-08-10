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
      <CapabilitiesSection />
      <FeaturedWork />
      <TestimonialSection />
      <ContactCta />
    </>
  )
}
