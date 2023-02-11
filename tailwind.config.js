/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      openSans: ["openSans", "sans-serif"],
      semiBold: ["semiBold", "sans-serif"],
      openSansBold: ["openSansBold", "sans-serif"],
     },
    colors: {
      main: "#02C3A5",
      dark: "#1B3A4B",
      secondary: "#d8ebe8",
      hearth: "#ED5C5C",
      paragraph: "#1a2734",
    },
    extend: {
      backgroundImage: {
        'custom-dark-bg': "url('../../public/images/backgrounds/stelle_bg2.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
