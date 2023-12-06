/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'slate': '#475569',
      'slate-dark': '#1e293b',
      
    },
    fontFamily: {
      sans: ['Playpen Sans', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}