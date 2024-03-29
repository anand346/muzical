/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      muzical_primary : "#ff4057", // red
      muzical_secondary : "#282634", // dark purple
      muzical_secondary_low : "#3a3846", // light purple
      muzical_secondary_high : "#1b1924", // for hovering effect
      muzical_grey : "#b8b7bd", // grey for icons and text
      muzical_black : "#2E282A", // black for large text
    },
    fontFamily :{
      Helvetica : ['Helvetica'],
    },
    extend: {},
  },
  plugins: [],
}

