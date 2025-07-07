"use client"

import { useEffect, useState } from "react"
import { Menu, X, Eye, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <h1
            className="text-xl font-bold text-slate-900 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            Manav.
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollTo("portfolio")}
              className="text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              <Eye className="h-4 w-4 mr-2" />
              Portfolio
            </Button>
            <Button
              size="sm"
              onClick={() => scrollTo("contact")}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6"
            >
              <Mail className="h-4 w-4 mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition"
              >
                {item.name}
              </button>
            ))}

            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollTo("portfolio")}
                className="w-full justify-center border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Portfolio
              </Button>
              <Button
                size="sm"
                onClick={() => scrollTo("contact")}
                className="w-full justify-center bg-slate-900 hover:bg-slate-800 text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
