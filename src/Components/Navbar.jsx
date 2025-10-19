import { Link } from "react-scroll";
import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-bg-dark/60 backdrop-blur-md border-b border-light-border dark:border-purple-800/10 shadow-sm dark:shadow-glow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="text-xl font-semibold text-gray-900 dark:text-white neon">
          Chidubem Victor
        </div>

        <div className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-300">
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
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
}
