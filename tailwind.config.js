/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
      keyframes: {
        'trans-right': {
          '0%, 100%':{ transform: 'translateX(5px)'},
          '50%': { transform: 'translateX(0);'}
        },
        'trans-up': {
          '0%, 100%':{ transform: 'translateY(-10px)'},
          '50%': { transform: 'translateY(0)'}
        }
      },
     animation: {
      'trans-right': 'trans-right 1.5s ease-in-out infinite',
      'trans-up': 'trans-up 1.5s ease-in-out infinite'
     }
    },
  },
  plugins: [],
}
