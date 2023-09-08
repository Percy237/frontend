/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        kids: "url('../src/assets/images/kids-holding-their-certificates.jpg')",
        boxShadow: {
          "3xl": " 0 0 10px 10px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    colors: {
      "dark-blue": "#05386B",
      red: "#FA3F3F",
      white: "#FFFFFF",
      "white-1": "#F8F9FF",
      gray: "#DADADA",
      "gray-1": "#E3E8F1",
      "gray-2": "#828282",
      "gray-3": "#A9ABB0",
      "gray-4": "#F5F7FB",
      "black-1": "#1C1F37",
      orange: "#ff7849",
      green: "#5CBD95",
      "light-green": "#16C098",
      "medium-green": "#008767",
      "gray-dark": "#273444",

      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
