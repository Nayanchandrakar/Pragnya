/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // #08154A
        primary: "#08154a",
        secondary: "#08154a",
        heading: "#08154a",
        para: "rgb(35 53 122 / .6)",
        borderColor: "white",
      },
      backgroundImage: {
        glass_effect2: [
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )",
        ],
      },
    },
  },
  plugins: [],
}
