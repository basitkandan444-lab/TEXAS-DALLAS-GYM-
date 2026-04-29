import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramsList } from "@/components/programs/programs-list"
import { ClassSchedulePreview } from "@/components/programs/class-schedule-preview"

export const metadata: Metadata = {
  title: "Programs | Grand Technique Gym",
  description: "Explore our comprehensive fitness programs including strength training, HIIT, boxing, yoga, and more. Find the perfect program for your goals.",
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProgramsHero />
      <ProgramsList />
      <ClassSchedulePreview />
      <Footer />
    </main>
  )
}
