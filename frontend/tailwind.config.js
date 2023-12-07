/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'slate': '#003566',
      'slate-dark': '#000814',
      'white': '#fff',
      'peach': '#F1B4BB',
      'peach-light': '#ffc300',
      'teal': '#AEE1E1',
      
    },
    fontFamily: {
      sans: ['Playpen Sans', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}