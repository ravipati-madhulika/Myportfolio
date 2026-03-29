import About from "@/components/About";
import Hero from "@/components/Hero";
import Study from "@/components/Study";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home(): JSX.Element {
  return (
    <main style={{ position: "relative" }}>
      <section id="hero"><Hero /></section>
      <Navbar/>
      <section id="about"><About /></section>
      <section id="study"><Study /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <Footer/>
    </main>
  );
}