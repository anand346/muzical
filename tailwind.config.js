/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			muzical_primary: "#ff4057", // red
			muzical_secondary: "#282634", // dark purple
			muzical_secondary_low: "#3a3846", // light purple
			muzical_secondary_high: "#1b1924", // for hovering effect
			muzical_grey: "#b8b7bd", // grey for icons and text
			muzical_black: "#2E282A", // black for large text
		},
		fontFamily: {
			Helvetica: ["Helvetica"],
		},
		extend: {},
	},
	plugins: [
		function ({ addBase, addUtilities }) {
			addUtilities({
				".custom-conic-gradient": {
					background:
						"conic-gradient(from 180deg at 50% 35.57%, #523263 42.65144169330597deg, #573669 45.68834066390991deg, #3E214E 314.27754163742065deg, #3F224F 317.4042248725891deg)",
				},
			});
		},
	],
};
