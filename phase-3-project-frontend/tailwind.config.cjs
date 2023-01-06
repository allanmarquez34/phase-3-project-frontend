/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satisfy:['Satisfy']
      }
      // backgroundImage: {
      //   'birdhouse': "url('./src/images/birdhouse.jpg')",
      // },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
