/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 250px)',
        'auto-fill-mobile': 'repeat(auto-fill, 100%)'
      }
    },
  },
  plugins: [],
}