"use client"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleCTA = () => {
    setActiveSection("contact")
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Full-Stack Developer & Network Specialist
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I craft robust, scalable applications with expertise spanning frontend, backend, and network
              infrastructure. Certified in networking with a passion for building elegant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleCTA}
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("latest-work")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center animate-fade-in-down">
            {/* <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-accent/50 transition-colors"> */}
                {/* <div className="space-y-4 h-full flex flex-col items-center justify-center"> */}
                  {/* <svg
                    className="w-16 h-16 text-muted-foreground/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg> */}
                  {/* <p className="text-muted-foreground text-center text-sm">Your profile image here</p>
                  <p className="text-xs text-muted-foreground/60">Upload your photo</p> */}

                    <img
                    src={"/ike.jpeg" || "/placeholder.svg"}
                    alt={"Profile Image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                {/* </div> */}
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
