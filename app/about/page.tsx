import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { FacilitySection } from "@/components/about/facility-section"

export const metadata: Metadata = {
  title: "About Us | Grand Technique Gym",
  description: "Learn about Grand Technique Gym's mission, values, and world-class facilities. Discover why we're Texas's premier fitness destination.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <FacilitySection />
      <Footer />
    </main>
  )
}
