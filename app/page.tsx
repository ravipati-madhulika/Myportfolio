import About from "@/components/About";
import DottedBackground from "@/components/DottedBackground";
import Hero from "@/components/Hero";

export default function Home(): JSX.Element {
  return (
    <main style={{ position: "relative" }}>
      <DottedBackground />
      <Hero />
      <About/>
    </main>
  );
}