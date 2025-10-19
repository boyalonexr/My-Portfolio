/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
     colors: {
        'bg-light': '#f9fafb',
        'bg-dark': '#0b0b0d',
        'accent-purple': '#8b5cf6',
        'accent-blue': '#3b82f6',
        'light-glass': 'rgba(255,255,255,0.8)',
        'light-border': 'rgba(0,0,0,0.1)',
        'light-text': '#374151',
        'light-subtle': '#f3f4f6',
      },
      boxShadow: {
        'glow-lg': '0 10px 30px rgba(139,92,246,0.12), 0 6px 12px rgba(59,130,246,0.06)',
        'light-shadow': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'light-glow': '0 0 20px rgba(139,92,246,0.05)'
      }
    }
  },
  plugins: []
}
