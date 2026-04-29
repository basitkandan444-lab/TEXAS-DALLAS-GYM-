import Link from "next/link"
import { Dumbbell, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-8">
          <Dumbbell className="h-8 w-8 text-primary" />
          <div className="flex flex-col text-left">
            <span className="font-display text-xl leading-none tracking-wider text-foreground">
              GRAND TECHNIQUE
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Elite Fitness
            </span>
          </div>
        </Link>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          
          <h1 className="font-display text-2xl text-foreground mb-2">AUTHENTICATION ERROR</h1>
          <p className="text-muted-foreground mb-6">
            Something went wrong during the authentication process. This could be due to an expired link or an invalid request.
          </p>

          <div className="space-y-3">
            <Link href="/auth/login">
              <Button className="w-full bg-primary hover:bg-primary/90 group">
                Try Again
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Return Home
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Need help?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  )
}
