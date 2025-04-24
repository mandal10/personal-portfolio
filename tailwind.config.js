/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ['Poppins', 'sans-serif'],
        titlefont: ['Montserrat', 'sans-serif'],
      },
      colors:
      {
        bodycolor: "#212428",
        lightcolor: "#c4cfde",
        boxbg: "linear-gradient(145deg, #1e2024, 23272b)",
        designcolor: "#ff014f",
      },
      boxshadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}
