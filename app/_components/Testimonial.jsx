import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Working with [Your Name] was transformative. The new brand identity elevated our entire presence.",
    author: "Amanda R.",
    role: "Creative Director, Velox",
    rating: 5,
  },
  {
    quote: "From the first moodboard to final delivery, every step felt thoughtful and aligned. Highly recommend!",
    author: "Joshua L.",
    role: "Founder, Mina Skincare",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-semibold">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
