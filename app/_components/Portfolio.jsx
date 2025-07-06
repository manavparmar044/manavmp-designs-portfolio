import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Royal Palms",
    category: "Resort Brand Identity",
    description: "Well researched logo and brand identity for luxury resort and spa.",
    image: "/assets/project1-thumbnail.webp",
  },
  {
    name: "Lookin",
    category: "Eye Glasses brand identity",
    description: "Brand identity design for eyewear brand",
    image: "/assets/project2-thumbnail.webp",
  },
  {
    name: "Xsellrator",
    category: "Digital services brand identity and UI kit",
    description: "A UI kit and brand identity made for Xsellrator",
    image: "/assets/project3-thumbnail.png",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Portfolio</h2>
        </div>

        {/* Intro */}
        <p className="text-xl text-slate-600 mb-16 max-w-3xl">
          Here are a few select branding projects from the last 3+ years. Each project reflects a unique story and
          strategic vision.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Image */}
              <div className="aspect-[4/3] rounded-2xl mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover rounded-2xl group-hover:brightness-110 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                
                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.name} — {project.category}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all duration-300">
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
