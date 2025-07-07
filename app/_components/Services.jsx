import { Palette, Zap, RefreshCw, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Logo, typography, color palette, and visual system development.",
  },
  {
    icon: Zap,
    title: "Logo Design",
    description: "Custom marks that speak your brand's essence—versatile, clean, and enduring.",
  },
  {
    icon: RefreshCw,
    title: "Rebranding",
    description: "Breathe new life into your brand with a refreshed look that aligns with your future goals.",
  },
  {
    icon: MessageCircle,
    title: "Design Consultation",
    description: "1:1 creative sessions to guide your visual direction and brand clarity.",
  },
]

export default function Services() {
  return (
    <section id = "services" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>

              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
