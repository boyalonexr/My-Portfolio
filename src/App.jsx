import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-bg-light to-light-subtle dark:from-bg-dark dark:to-[#0f0f12] text-gray-900 dark:text-gray-100 transition-all duration-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
