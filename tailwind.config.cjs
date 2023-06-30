/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif']
      },
      colors:{
        primary:'#050816',
        secondary:'#4326f3',
        secondaryLight:'#4326f3e6'
      },
      backgroundImage:{
      glass_effect2: [
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )",
      ]
      }
    },
  },
  plugins: [],
}