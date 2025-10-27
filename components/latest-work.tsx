export default function LatestWork() {
  const works = [
    {
      id: 1,
      title: "Corporate Website",
      image: "/modern-corporate-website.png",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Portfolio Platform",
      image: "/portfolio-showcase-platform.jpg",
      borderColor: "border-gray-300",
      bgColor: "bg-gray-50",
    },
    {
      id: 3,
      title: "Movie Dashboard",
      image: "/movie-streaming-dashboard-dark-theme.jpg",
      borderColor: "border-red-400",
      bgColor: "bg-red-50",
    },
    {
      id: 4,
      title: "Digital Experience",
      image: "/digital-experience-design.png",
      borderColor: "border-amber-300",
      bgColor: "bg-amber-50",
    },
    {
      id: 5,
      title: "Dental Clinic",
      image: "/dental-clinic-website.png",
      borderColor: "border-blue-300",
      bgColor: "bg-blue-50",
    },
    {
      id: 6,
      title: "Agency Portfolio",
      image: "/creative-agency-portfolio.png",
      borderColor: "border-gray-800",
      bgColor: "bg-gray-900",
    },
  ]

  return (
    <section id="latest-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header with highlighted "Work" */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              My latest{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Work</span>
                <span className="absolute inset-0 bg-accent rounded-full -z-0 scale-110"></span>
              </span>
            </h2>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <a
                key={work.id}
                href="#"
                className={`group relative overflow-hidden rounded-2xl border-4 ${work.borderColor} transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
              >
                <div className={`${work.bgColor} aspect-square flex items-center justify-center overflow-hidden`}>
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
