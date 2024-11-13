/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif'],
        'Roboto' : ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'payday': "url('/assets/img/pay.webp')",
        'hero': "url('/assets/img/hero.webp')",
      },
      dropShadow: {
        'app': '0px 4px 60px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'main': '#e6c744',
        'grey': '#c2c8da',
        'braight-grey': '#F4F6F5'
      },
      keyframes: {
        move: {
          'from': { transform: 'translate(0px, -50%)' },
          'to': { transform: 'translate(15px, -50%)' }
        },
        'wave-medium': {
          '0%': { width: '300px', height: '300px', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { width: '620px', height: '620px', opacity: '0' },
        },
        'wave-big': {
          '0%': { width: '420px', height: '420px', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { width: '740px', height: '740px', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'move-slow': 'move .5s infinite alternate',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        '2xl':'30px',
        'xl':'20px',
      }
    },
  },
  plugins: [],
}

