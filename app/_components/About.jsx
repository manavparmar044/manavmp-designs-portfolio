import React from 'react'

function About() {
  return (
    <section className="text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h3 className="text-3xl sm:text-4xl font-semibold">
          Meet the Designer
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I’m <span className="text-white font-medium">Manav Manish Parmar</span>, a visual identity designer shaping brands that stand out and scale. Since 2021, I’ve helped startups, entrepreneurs, and agencies build clarity and consistency through impactful design.
        </p>
        <p className="text-md sm:text-lg text-gray-400 max-w-2xl mx-auto">
          From strategic logo systems to complete rebrands, I work closely with clients to craft visuals that speak, inspire, and convert.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="mt-6 px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-gray-950 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
