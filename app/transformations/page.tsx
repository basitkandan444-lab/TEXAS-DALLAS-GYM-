import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TransformationsHero } from "@/components/transformations/transformations-hero"
import { TransformationsList } from "@/components/transformations/transformations-list"
import { TransformationsCTA } from "@/components/transformations/transformations-cta"

export const metadata: Metadata = {
  title: "Transformations | Grand Technique Gym",
  description: "Real results from real members. See the incredible transformations achieved at Grand Technique Gym.",
}

export default function TransformationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TransformationsHero />
      <TransformationsList />
      <TransformationsCTA />
      <Footer />
    </main>
  )
}
