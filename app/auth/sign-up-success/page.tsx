import Link from "next/link"
import { Dumbbell, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
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
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="font-display text-2xl text-foreground mb-2">CHECK YOUR EMAIL</h1>
          <p className="text-muted-foreground mb-6">
            We&apos;ve sent you a confirmation link. Please check your email and click the link to verify your account.
          </p>

          <div className="space-y-3">
            <Link href="/auth/login">
              <Button className="w-full bg-primary hover:bg-primary/90 group">
                Back to Sign In
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
          Didn&apos;t receive an email? Check your spam folder or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  )
}
