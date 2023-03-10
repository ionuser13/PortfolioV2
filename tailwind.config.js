/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#1f2937", 
        "section-background": "#323f4b",
        "body-text-color": "#ecf0f3",
        "remarking-color": "#5651e5",
        "light-gradient-color": "#709dff",
        "hover-color": "#6f6deb", 
        "footer-color": "#0d1217", 
      }
    },
  },
  plugins: [],
}
