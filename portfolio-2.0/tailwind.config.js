/** @type {import('tailwindcss').Config} */
module.exports = {
  /* tells tailwaind where to look to use it. looking at pages and components folders */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  //  plugins: [require("tailwind-scrollbar")],
}
