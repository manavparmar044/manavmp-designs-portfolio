import React from 'react'

function Hero() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)]">
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
          Design That Defines Brands
        </h2>
        <p className="text-lg sm:text-xl mt-4 max-w-2xl text-white/80">
          I’m Manav Manish Parmar — building bold, strategic identities for startups, creators, and companies ready to make their mark.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Book a Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero
