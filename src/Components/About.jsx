import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-purple-400 font-semibold mb-4 neon">About</h2>
        <p className="text-gray-300 lead">
          I build high-quality, accessible front-end applications with React and Tailwind CSS. My focus is on performance, delightful UI, and products that scale.
        </p>
      </motion.div>
    </section>
  );
}
