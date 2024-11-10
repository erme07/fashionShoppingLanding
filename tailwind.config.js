/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif']
      },
      colors: {
        'main': '#e6c744',
        'grey': '#c2c8da',
        'braight-grey': '#F4F6F5'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
      }
    },
  },
  plugins: [],
}

