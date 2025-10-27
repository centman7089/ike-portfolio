"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12 animate-fade-in-up">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">Have a project in mind? Let's discuss how I can help.</p>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 duration-300"
            >
              {isLoading ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center hover:scale-105 transition-transform">
              <p className="text-muted-foreground text-sm mb-2">Email</p>
              <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium">
                hello@example.com
              </a>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <p className="text-muted-foreground text-sm mb-2">LinkedIn</p>
              <a href="#" className="text-accent hover:underline font-medium">
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <p className="text-muted-foreground text-sm mb-2">GitHub</p>
              <a href="#" className="text-accent hover:underline font-medium">
                github.com/yourprofile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
