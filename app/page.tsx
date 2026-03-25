import DottedBackground from "@/components/DottedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import RevealSection from "@/components/RevealSection";

export default function Home(): JSX.Element {
  return (
    <main style={{ position: "relative" }}>
      <DottedBackground />
      <Hero />
      <RevealSection id="about">
        <About />
      </RevealSection>
      <RevealSection id="experience">
        <Experience />
      </RevealSection>
      <RevealSection id="projects">
        <Projects />
      </RevealSection>
      <RevealSection id="skills">
        <Skills />
      </RevealSection>
      <RevealSection id="contact">
        <Contact />
      </RevealSection>
    </main>
  );
}