/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "root",
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Custom Font"', "sans-serif"],
      },
    },
    color: {
      orange: "#ED8B06",
      white: "#FFFFFF",
      grey: "#F5F5F5",
    },
  },
  plugins: [],
};
