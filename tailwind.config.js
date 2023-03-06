/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#ecf0f3",
        "body-text-color": "#1f2937"        
      }
    },
  },
  plugins: [],
}
