/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // lightGreen: '#4f46e5',
        lightGreen: "#4673B8",
        white:'#FFFFFF',
        creamWhite:'#F6F7F9',
        darkBlue:'#171717',
        lightGray:"#D4D4D8"
      },
      backgroundImage:{
        'hero-image':'url("./assets/onboarding-dark.jpg")'
      },
    },
  },
  plugins: [],
}
