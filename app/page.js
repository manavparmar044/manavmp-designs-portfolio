import Hero from "./_components/Hero"
import About from "./_components/About"
import Services from "./_components/Services"
import Portfolio from "./_components/Portfolio"
import Testimonials from "./_components/Testimonial"
import Contact from "./_components/Contact"
import { LogoScroll } from "./_components/LogoScroll"
import Header from "./_components/Header"
import CustomCursor from "./_components/CustomCursor"

export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <LogoScroll />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    </>
  )
}
