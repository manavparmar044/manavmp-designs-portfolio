import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-no-repeat bg-top text-white"
    style={{
      backgroundImage: "url('/bg-2.png')",
      backgroundSize: "100% 100%",
    }}>
      <div
        
      >
        <div className="absolute inset-0" />
        <Header />
        <Hero />
      </div>
      <section className="px-6 py-16">
        <About />
      </section>
    </div>
  );
}
