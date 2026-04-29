import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      planType,
      fitnessGoals,
      experienceLevel,
      preferredStartDate,
      howHeard,
      additionalNotes,
    } = data

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !planType) {
      return Response.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { error } = await supabase
      .from("join_requests")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        plan_type: planType,
        fitness_goals: fitnessGoals || [],
        experience_level: experienceLevel || null,
        preferred_start_date: preferredStartDate || null,
        how_heard: howHeard || null,
        additional_notes: additionalNotes || null,
        status: "pending",
      })

    if (error) {
      console.error("[v0] Join request error:", error)
      return Response.json(
        { error: "Failed to submit your application. Please try again." },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: "Your membership application has been submitted! Our team will contact you within 24 hours.",
    })
  } catch (error) {
    console.error("[v0] Join API error:", error)
    return Response.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
