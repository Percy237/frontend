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
      myred: "FA3F3F",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
