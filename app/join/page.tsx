import { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JoinForm } from "@/components/join/join-form"

export const metadata: Metadata = {
  title: "Join Now | Grand Technique Gym",
  description: "Start your free 7-day trial at Grand Technique Gym. Fill out our simple form and begin your transformation today.",
}

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Suspense fallback={<div className="min-h-screen" />}>
        <JoinForm />
      </Suspense>
      <Footer />
    </main>
  )
}
