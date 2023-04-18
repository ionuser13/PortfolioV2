/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#2A1B3D", 
        "section-background": "#323f4b",
        "body-text-color": "#ecf0f3",
        "remarking-color": "#5651e5",
        "light-gradient-color": "#709dff",
        "hover-color": "#5651e5", 
        "footer-color": "#0d1217", 
      }
    },
  },
  plugins: [],
}
