import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For now, we'll just log it and return success
    console.log("Contact form submission:", { name, email, message })

    // Example: Send email using a service
    // await sendEmail({ to: 'your-email@example.com', name, email, message })

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
