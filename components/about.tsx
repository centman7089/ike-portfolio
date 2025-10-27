export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a deep understanding of modern web technologies and network
                infrastructure. My journey in tech has equipped me with the skills to build end-to-end solutions that
                are both performant and scalable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in frontend frameworks, backend systems, and networking protocols, I bridge the gap
                between beautiful user interfaces and robust server architectures. I'm committed to writing clean,
                maintainable code and staying current with industry best practices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="font-semibold text-lg mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Building complete applications from database to UI with modern frameworks and best practices.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="font-semibold text-lg mb-2">Network Architecture</h3>
                <p className="text-muted-foreground">
                  Designing and implementing secure, efficient network solutions with certified expertise.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <h3 className="font-semibold text-lg mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, scalability, and reliability across all layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
