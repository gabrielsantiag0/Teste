/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        gallery: ['"Gallery Modern"', 'sans-serif', 'Poppins'],
      },
    },
  },
  plugins: [],
}
