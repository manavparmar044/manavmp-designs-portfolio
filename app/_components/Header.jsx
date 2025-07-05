import React from 'react'

function Header() {
  return (
    <div className="relative z-10">
          <header className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Manav Parmar</h1>
            <nav className="space-x-6">
              <a href="#portfolio" className="hover:underline">Portfolio</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </header>
        </div>
  )
}

export default Header