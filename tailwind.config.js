/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#ecf0f3",
        "body-text-color": "#1f2937",
        "remarking-color": "#5651e5",
        "light-gradient-color": "#709dff"
      }
    },
  },
  plugins: [],
}
