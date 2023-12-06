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
      'peach': '#FCD1D1',
      'peach-light': '#ECE2E1',
      'teal': '#AEE1E1',
      
    },
    fontFamily: {
      sans: ['Playpen Sans', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}