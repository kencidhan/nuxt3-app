/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
