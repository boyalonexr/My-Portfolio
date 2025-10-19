/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors: {
        'bg-light': '#f9fafb',
        'bg-dark': '#0b0b0d',
        'accent-purple': '#8b5cf6',
        'accent-blue': '#3b82f6',
      },
      boxShadow: {
        'glow-lg': '0 10px 30px rgba(139,92,246,0.12), 0 6px 12px rgba(59,130,246,0.06)'
      }
    }
  },
  plugins: []
}
