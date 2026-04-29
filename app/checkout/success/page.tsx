import { redirect } from "next/navigation"
import { getCheckoutSession } from "@/app/actions/stripe"
import { Navigation } from "@/components/navigation"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id) {
    redirect("/pricing")
  }

  const session = await getCheckoutSession(session_id)

  if (session.status !== "complete") {
    redirect("/pricing")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Texas Gym!
            </h1>

            <p className="text-lg text-muted-foreground mb-2">
              Your membership is now active.
            </p>

            {session.customerEmail && (
              <p className="text-muted-foreground mb-8">
                A confirmation email has been sent to{" "}
                <span className="text-foreground font-medium">
                  {session.customerEmail}
                </span>
              </p>
            )}

            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold mb-3">What&apos;s Next?</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  Check your email for your membership details
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  Download our mobile app to book classes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  Visit us to complete your fitness assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  Start your transformation journey!
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
