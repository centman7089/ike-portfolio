"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Skills from "@/components/skills"
import LatestWork from "@/components/latest-work"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Stats />
      <About />
      <Skills />
      <LatestWork />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
