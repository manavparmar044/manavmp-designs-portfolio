"use client"

import { ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section data-cursor-color="bg-blue" id = "hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Crafting Iconic Brands
          <br />
          <span className="text-slate-600">Since 2021</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Hi, I'm <span className="font-semibold text-slate-900">Manav Manish Parmar</span>, a brand and logo designer helping
          startups and global brands stand out with timeless visual identities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
  onClick={() => {
    const el = document.getElementById("portfolio")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }}
  size="lg"
  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
>
  <Eye className="mr-2 h-5 w-5" />
  View Portfolio
</Button>

          <Button onClick={() => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }}
            variant="outline"
            size="lg"
            className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 bg-transparent cursor-pointer"
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
