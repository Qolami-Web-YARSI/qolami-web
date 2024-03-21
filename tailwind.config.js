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
        'jumbotron': "url('/public/jumbotron-qolami-web.png')",
        'pencil1': "url('/public/pencil_1.png')",
        'pencil2': "url('/public/pencil_2.png')",
        'wave': "url('/public/wave.png')",
        'card1_1': "url('/public/card1_1.png')",
        'card1_2': "url('/public/card1_2.png')",
        'card1_3': "url('/public/card1_3.png')",
        'card1_4': "url('/public/card1_4.png')",
        'card2_1': "url('/public/card2_1.png')",
        'card2_2': "url('/public/card2_2.png')",
        'card2_3': "url('/public/card2_3.png')",
        'card2_4': "url('/public/card2_4.png')",
      }
    },
  },
  plugins: [],
}

