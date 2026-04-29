import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Grand Technique Gym",
  description: "Get in touch with Grand Technique Gym. We're here to answer your questions about memberships, programs, and getting started.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
