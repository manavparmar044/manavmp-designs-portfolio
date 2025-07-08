"use client"

import Image from "next/image"

const brandLogos = [
  { src: "/assets/Xsellrator_grey.png", alt: "Xsellrator Logo" },
  { src: "/assets/royalpalms_grey.png", alt: "Royal Palms Logo" },
  { src: "/assets/laya_grey.png", alt: "Laya Logo" },
  { src: "/assets/Thepines_grey.png", alt: "The Pines Logo" },
  { src: "/assets/Xsellrate_grey.png", alt: "Xsellrate Logo" },
]

export const LogoScroll = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl text-center text-white/70 mb-12 font-medium">
          Brands I have worked with
        </h2>

        {/* Mobile: Grid Layout */}
        <div className="grid grid-cols-2 gap-8 justify-items-center sm:hidden">
          {brandLogos.map(({ src, alt }, index) => (
            <Image
              key={index}
              src={src}
              alt={alt}
              width={100}
              height={40}
              className="h-8 w-auto opacity-70"
            />
          ))}
        </div>

        {/* Desktop: Marquee Scroll */}
        <div
          className="relative overflow-hidden hidden sm:block"
          style={{
            mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
            WebkitMask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
          }}
        >
          <div className="flex animate-marquee w-max space-x-40 items-center">
            {[...Array(3)].map((_, setIndex) => (
              <div className="flex space-x-40" key={setIndex}>
                {brandLogos.map(({ src, alt }, index) => (
                  <Image
                    key={`${setIndex}-${index}`}
                    src={src}
                    alt={alt}
                    width={120}
                    height={40}
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
