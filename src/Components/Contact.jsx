import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl text-purple-400 font-semibold neon mb-4">Contact</h3>
        <p className="text-gray-300 mb-6">If you'd like to work together, reach out via email or LinkedIn.</p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:victorugwu9772@gmail.com" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">Email me</a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" className="px-6 py-3 border border-purple-700/20 rounded-xl text-gray-200">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
