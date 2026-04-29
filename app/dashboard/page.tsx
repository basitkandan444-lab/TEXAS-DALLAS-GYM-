import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, Dumbbell, MessageSquare, User, LogOut, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Get user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              WELCOME BACK{profile?.first_name ? `, ${profile.first_name.toUpperCase()}` : ""}
            </h1>
            <p className="text-muted-foreground">
              Manage your membership, track your progress, and book classes.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Member Since", value: new Date(user.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }) },
              { label: "Current Plan", value: "Premium" },
              { label: "Classes Booked", value: "0" },
              { label: "PT Sessions Left", value: "2" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card border border-border">
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="font-display text-2xl text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/dashboard/bookings">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-1">BOOK A CLASS</h3>
                <p className="text-sm text-muted-foreground mb-4">Reserve your spot in upcoming classes</p>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Schedule <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            
            <Link href="/dashboard/workouts">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-1">MY WORKOUTS</h3>
                <p className="text-sm text-muted-foreground mb-4">View and log your training sessions</p>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Workouts <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            
            <Link href="/dashboard/chat">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-1">AI ASSISTANT</h3>
                <p className="text-sm text-muted-foreground mb-4">Get fitness advice and workout tips</p>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start Chat <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            
            <Link href="/dashboard/profile">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <User className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-1">MY PROFILE</h3>
                <p className="text-sm text-muted-foreground mb-4">Update your info and preferences</p>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Edit Profile <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Sign Out */}
          <form action="/api/auth/signout" method="POST">
            <Button variant="outline" type="submit" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
