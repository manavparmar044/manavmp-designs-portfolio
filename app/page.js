import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="text-white">
      <div
        className="relative w-full min-h-screen bg-no-repeat bg-top"
        style={{
          backgroundImage: "url('/orange-bg.png')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0" />
        <Header />
        <Hero />
      </div>
      <section className="bg-gray-950 px-6 py-16">
      </section>
    </div>
  );
}
