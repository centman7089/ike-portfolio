export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Network Monitoring Dashboard",
      description:
        "Real-time network monitoring tool with alerts, traffic analysis, and performance metrics visualization.",
      tags: ["Next.js", "WebSocket", "D3.js", "Python"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and analytics.",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      title: "API Gateway Service",
      description: "Scalable API gateway with rate limiting, authentication, and request routing for microservices.",
      tags: ["Node.js", "Express", "Redis", "Docker"],
      link: "#",
    },
    {
      title: "Data Visualization Platform",
      description:
        "Interactive data visualization platform for analyzing network traffic and system performance metrics.",
      tags: ["Next.js", "Recharts", "PostgreSQL", "AWS"],
      link: "#",
    },
    {
      title: "Security Audit Tool",
      description: "Automated security audit tool for network vulnerability scanning and compliance reporting.",
      tags: ["Python", "FastAPI", "React", "PostgreSQL"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
