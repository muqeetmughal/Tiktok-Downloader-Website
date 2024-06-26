/** @type {import('tailwindcss').Config} */

const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./app/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {},
    container: {
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    // themes: ["night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },
};
