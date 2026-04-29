import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrainersHero } from "@/components/trainers/trainers-hero"
import { TrainersList } from "@/components/trainers/trainers-list"
import { TrainersCTA } from "@/components/trainers/trainers-cta"

export const metadata: Metadata = {
  title: "Our Trainers | Grand Technique Gym",
  description: "Meet our team of certified fitness professionals. Expert trainers dedicated to helping you achieve your fitness goals.",
}

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TrainersHero />
      <TrainersList />
      <TrainersCTA />
      <Footer />
    </main>
  )
}
