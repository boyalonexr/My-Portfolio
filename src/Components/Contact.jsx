import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 rounded-2xl mx-4 light-section-glow">
          <h3 className="text-3xl text-purple-400 font-semibold neon mb-4">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">If you'd like to work together, reach out via email or LinkedIn.</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:victorugwu9772@gmail.com" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white shadow-glow-lg hover:scale-105 transition transform">Email me</a>
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" className="px-6 py-3 border border-light-border dark:border-purple-700/20 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-light-subtle dark:hover:bg-[#141418]/60 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
