export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "MySql", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "AWS", "Linux", "CI/CD", "Vercel"],
    },
    {
      category: "Networking",
      skills: ["TCP/IP", "DNS", "VPN", "Firewalls", "Network Security", "Routing"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-6 text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
