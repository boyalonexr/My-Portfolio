import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-900 text-gray-200 font-inter">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <section className="max-w-6xl mx-auto px-6 space-y-28">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </section>
      </main>
    </div>
  );
}
