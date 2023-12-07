/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#003566',
      'blue-dark': '001d3d',
      'blue-extra-dark': '#000814',
      'white': '#fff',
      'yellow-light': '#ffd60a',
      'yellow': '#ffc300',
      'teal': '#AEE1E1',
      
    },
    fontFamily: {
      sans: ['Playpen Sans', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}