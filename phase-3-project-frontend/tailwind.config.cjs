/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satisfy:['Satisfy'],
        CormorantGaramond:['Cormorant Garamond'],
        Cinzel:['Cinzel'],
        Tangerine:['Tangerine'],
        Parisienne:['Parisienne'],
        BodoniModa:['Bodoni Moda'],
        Sacramento:['Sacramento'],
        Cormorant:['Cormorant'],
        GreatVibes:['Great Vibes']
      }
      // backgroundImage: {
      //   'birdhouse': "url('./src/images/birdhouse.jpg')",
      // },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
