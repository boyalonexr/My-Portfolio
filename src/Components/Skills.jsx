import { motion } from "framer-motion";
const skills = ["React", "Tailwind", "TypeScript", "JavaScript", "Accessibility", "Performance", "Figma", "Testing"];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl text-purple-400 font-semibold mb-6 neon text-center">Skills</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((s, i) => (
            <motion.div key={s} whileHover={{ y: -6 }} className="glass px-4 py-2 rounded-2xl border border-purple-800/20 text-gray-200 shadow-glow-lg">
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
