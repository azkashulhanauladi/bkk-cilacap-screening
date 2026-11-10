/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bkk: {
          blue: '#0A4D68',
          teal: '#088395',
          light: '#EBF4F6',
          accent: '#05BFDB'
        }
      }
    },
  },
  plugins: [],
}