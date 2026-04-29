import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing | Grand Technique Gym",
  description: "Transparent pricing for all membership levels. Start your free trial today and experience Texas's premier fitness destination.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </main>
  )
}
