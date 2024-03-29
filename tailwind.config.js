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
      }
    },
  },
  plugins: [],
}

