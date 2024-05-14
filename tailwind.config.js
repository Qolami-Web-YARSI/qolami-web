/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('/public/jumbotron1_1.svg')",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'poppinsmedium': ["Poppins-Medium", "sans-serif"],
        'poppinbolditaclic': ["Poppins-BoldItalic", "sans-serif"],
        'sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'xs': '420px',
        '2xs': '280px',
      },
      brightness: {
        80: '.8',
      }
    },
  },
  plugins: [],
}

