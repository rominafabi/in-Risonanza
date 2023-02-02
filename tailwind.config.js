/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      openSans: ["openSans", "sans-serif"],
      semiBold: ["semiBold", "sans-serif"],
      openSansBold: ["openSansBold", "sans-serif"],
     },
    colors: {
      main: "#02C3A5",
      secondary: "#d8ebe8",
      hearth: "#ED5C5C",
      paragraph: "#1a2734",
    },
    extend: {},
  },
  plugins: [],
});
