import { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar"; // Add this line
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

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
