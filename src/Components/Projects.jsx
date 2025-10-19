import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    short: "Personal portfolio with premium UI.",
    desc: "A single-page, high-performance portfolio built with React, Tailwind, Framer Motion and particles. Focused on accessibility and performance.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    id: 2,
    title: "Admin Dashboard",
    short: "Interactive dashboard UI kit",
    desc: "A modular admin dashboard with charts, filters, and theme switching.",
    tech: ["React", "Chart.js", "Tailwind"],
    link: "#"
  }
];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl text-purple-400 font-semibold mb-6 neon text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-light-border dark:border-purple-700/20 cursor-pointer hover:shadow-light-glow dark:hover:shadow-glow-lg"
              onClick={() => setOpen(p)}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{p.short}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-light-subtle dark:bg-[#0f0f13] border border-light-border dark:border-purple-700/10 text-gray-700 dark:text-gray-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center modal-backdrop">
          <div className="max-w-3xl w-full mx-6">
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="glass p-6 rounded-2xl border border-light-border dark:border-purple-700/20 shadow-light-glow dark:shadow-glow-lg">
              <div className="flex justify-between items-start">
                <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{open.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{open.desc}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {open.tech.map((t) => <span key={t} className="text-sm px-3 py-1 rounded-full bg-light-subtle dark:bg-[#0f0f13] border border-light-border dark:border-purple-700/10 text-gray-700 dark:text-gray-200">{t}</span>)}
                  </div>
                </div>
                <div>
                  <button className="text-gray-700 dark:text-gray-300" onClick={() => setOpen(null)}>Close</button>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={open.link} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white">Live Demo</a>
                <a href="#" className="px-4 py-2 border border-purple-700/20 rounded-md text-gray-700 dark:text-gray-200">Source</a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
