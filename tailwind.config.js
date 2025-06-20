/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Include shadcn/ui's extended theme (colors, borderRadius, keyframes, animation)
      // Copy this from shadcn/ui's installation guide or a new shadcn/ui project setup.
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
  ],
};