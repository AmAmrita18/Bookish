/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    colors: {
      'blue': '#003566',
      'blue-dark': '#001d3d',
      'blue-extra-dark': '#000814',
      'white': '#ffffff',
      'off-white': '#e5e5e5',
      'yellow-light': '#ffd60a',
      'yellow': '#fca311',
    },
    fontFamily: {
      sans: ['Playpen Sans', 'cursive'],
      // sans: ['Lato', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins:[require('flowbite/plugin')],
}