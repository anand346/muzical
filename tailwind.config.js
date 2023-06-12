/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      muzical_primary : "#ff4057",
      muzical_secondary : "#282634",
      muzical_secondary_low : "#3a3846",
      muzical_secondary_high : "#1b1924",
      muzical_grey : "#b8b7bd",
      muzical_black : "#2E282A",
      youtube_dark : "#40128B",
      youtube_bg : "#9336B4",
      youtube_bg_light : "#DD58D6",
      youtube_light : "#FFE79B",
    },
    fontFamily :{
      Helvetica : ['Helvetica'],
    },
    extend: {},
  },
  plugins: [],
}

