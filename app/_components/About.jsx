import { Palette, Target, Lightbulb, Award, Users, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <section id = "about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            {/* Skills/Approach */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Palette className="h-5 w-5 text-slate-700" />
                <span className="font-medium text-slate-800">Creative Vision</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Target className="h-5 w-5 text-slate-700" />
                <span className="font-medium text-slate-800">Strategic Focus</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main Design Element */}
            <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white rounded-3xl p-8 shadow-lg border border-slate-200">
              {/* Central Logo Concept */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-2xl mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">MP</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Brand Identity Designer</p>
              </div>

              {/* Design Process Steps */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Concept</div>
                    <div className="text-xs text-slate-600">Strategic thinking</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Palette className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Design</div>
                    <div className="text-xs text-slate-600">Visual execution</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Impact</div>
                    <div className="text-xs text-slate-600">Market success</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200 z-10">
              <div className="flex items-center gap-2 mb-1">
                <Award className="h-4 w-4 text-yellow-500" />
                <div className="text-xl font-bold text-slate-900">50+</div>
              </div>
              <div className="text-xs text-slate-600">Projects Delivered</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200 z-10">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-blue-500" />
                <div className="text-xl font-bold text-slate-900">100%</div>
              </div>
              <div className="text-xs text-slate-600">Client Satisfaction</div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-slate-200/50 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-slate-300/30 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        {/* Bottom Section - What I Believe */}
        <div className="mt-20 text-center">
          <h4 className="text-xl font-bold text-slate-900 mb-4">What I Believe</h4>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Great design isn't just about making things look good—it's about creating meaningful connections between
            brands and people. Every project is an opportunity to tell a unique story that resonates and endures.
          </p>
        </div>
      </div>
    </section>
  )
}
