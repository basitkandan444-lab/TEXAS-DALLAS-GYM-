import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { ProgramsPreview } from "@/components/home/programs-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"
import { AIChatbot } from "@/components/ai-chatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <ProgramsPreview />
      <Testimonials />
      <CTASection />
      <Footer />
      <AIChatbot />
    </main>
  )
}
