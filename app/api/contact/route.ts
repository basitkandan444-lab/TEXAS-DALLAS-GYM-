import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
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
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      })

    if (error) {
      console.error("[v0] Contact submission error:", error)
      return Response.json(
        { error: "Failed to submit contact form. Please try again." },
        { status: 500 }
      )
    }

    return Response.json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return Response.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
