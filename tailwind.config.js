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
      keyframes: {
        move: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(15px)' }
        }
      },
      animation: {
        'move-slow': 'move .5s infinite alternate',
      }
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

