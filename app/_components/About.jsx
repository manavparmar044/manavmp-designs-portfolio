export default function About() {
    return (
      <section id = "about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Designer. Storyteller. Brand Architect.
              </h3>
  
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Since 2021, I've partnered with dozens of brands—from emerging startups to established names—building
                  memorable identities rooted in strategy and creativity.
                </p>
  
                <p>
                  My approach combines <span className="font-semibold text-slate-900">minimalism</span>,{" "}
                  <span className="font-semibold text-slate-900">meaning</span>, and{" "}
                  <span className="font-semibold text-slate-900">market impact</span>. Every logo I craft is designed to
                  live beyond trends and grow with your brand.
                </p>
  
                <p>
                  Whether you're launching something new or reinventing your image, I'm here to shape your story through
                  design.
                </p>
              </div>
            </div>
  
            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">[YN]</span>
                </div>
              </div>
  
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
  
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl font-bold text-slate-900">3+</div>
                <div className="text-sm text-slate-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  