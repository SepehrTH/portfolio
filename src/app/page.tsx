import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* <h1 style={{ fontFamily: "var(--font-playfair)" }}>Sepehr</h1> */}
    </>
  );
}
