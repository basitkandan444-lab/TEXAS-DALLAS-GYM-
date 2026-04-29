import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQList } from "@/components/faq/faq-list"
import { FAQContact } from "@/components/faq/faq-contact"

export const metadata: Metadata = {
  title: "FAQ | Grand Technique Gym",
  description: "Find answers to frequently asked questions about Grand Technique Gym memberships, programs, and facilities.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FAQHero />
      <FAQList />
      <FAQContact />
      <Footer />
    </main>
  )
}
