import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed w-full z-50 top-0 left-0 bg-bg-900/60 backdrop-blur-md border-b border-purple-800/10"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="text-xl font-semibold text-white neon">Chidubem Victor</div>

        <div className="hidden md:flex gap-8 items-center text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="cursor-pointer capitalize hover:text-purple-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
