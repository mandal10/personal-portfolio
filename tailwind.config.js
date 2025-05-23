/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",



      },
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
