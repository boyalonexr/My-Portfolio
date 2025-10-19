import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-purple-700/20 hover:bg-purple-700/10 transition"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-purple-600 w-5 h-5" />
      )}
    </button>
  );
}
