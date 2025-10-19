import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 rounded-2xl mx-4 light-section-glow">
          <h2 className="text-3xl text-purple-400 font-semibold mb-4 neon">About</h2>
          <p className="text-gray-700 dark:text-gray-300 lead">
            I build high-quality, accessible front-end applications with React and Tailwind CSS. My focus is on performance, delightful UI, and products that scale.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
