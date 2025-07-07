"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-xl font-bold text-slate-900" onClick={() => scrollTo("hero")}>
          Manav.
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden sm:block">
          <button onClick={() => scrollTo("portfolio")} className="text-slate-700 hover:text-slate-900 font-medium">
            Portfolio
          </button>
          <button onClick={() => scrollTo("about")} className="text-slate-700 hover:text-slate-900 font-medium">
            About
          </button>
          <button onClick={() => scrollTo("services")} className="text-slate-700 hover:text-slate-900 font-medium">
            Services
          </button>
          <button onClick={() => scrollTo("contact")} className="text-slate-700 hover:text-slate-900 font-medium">
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
