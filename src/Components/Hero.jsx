import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <header id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-6xl mx-auto h-full px-6">
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <div className="w-full h-full">
                <div className="relative w-full h-full">
                  <div className="absolute -inset-16">
                    <ParticlesBackground />
                    {/* gradient overlays */}
                    <div className="absolute inset-0 hero-gradient" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight light-neon dark:neon"
        >
          <span className="text-gray-900 dark:text-white">Hi, I’m </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-extrabold">Chidubem Victor</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="mt-6 text-lg text-gray-700 dark:text-gray-300 flex flex-col items-center gap-3">
            <Typewriter
              phrases={[
                "Frontend Developer",
                "React • Tailwind • Performance",
                "Design-minded • Accessibility-first"
              ]}
            />
            <div className="mt-6 flex gap-4">
              <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-glow-lg hover:scale-105 transition transform">
                View LinkedIn
              </a>
              <a href="#projects" className="px-5 py-3 rounded-xl border border-purple-700/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141418]/60 transition">
                See Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
