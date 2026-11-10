/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { navy: "#10384f", navyDark: "#0b2c40", brand: "#ff5a1f", soft: "#f2f2f2" },
      fontFamily: { sans: ["var(--font-grotesk)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
