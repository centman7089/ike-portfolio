"use client"

import { useEffect, useState } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "90+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
  ]

  return (
    <section id="stats-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                {isVisible && <CountUp end={Number.parseInt(stat.number)} />}
              </div>
              <p className="text-muted-foreground uppercase text-sm tracking-widest font-medium">{stat.label}</p>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = end / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [end])

  return <>{count}+</>
}
