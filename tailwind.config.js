/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#FC8A06',
        brandBlue: '#03081F',
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
  ],
};
