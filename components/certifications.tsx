export default function Certifications() {
  const certifications = [
    {
      title: "Networking Certification",
      issuer: "Industry Recognized",
      date: "2024",
      description: "Comprehensive certification covering network design, security, and infrastructure management.",
      icon: "🏆",
    },
    {
      title: "Full-Stack Development",
      issuer: "Professional Development",
      date: "2023",
      description: "Advanced certification in modern full-stack development practices and technologies.",
      icon: "⭐",
    },
    {
      title: "Cloud Architecture",
      issuer: "AWS Certified",
      date: "2023",
      description: "Expertise in designing and deploying scalable cloud solutions on AWS.",
      icon: "☁️",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Certifications & Achievements</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-accent text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
