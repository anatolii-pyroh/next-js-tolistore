/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#10a8c9",
      "light-primary": "#11b7db",
      "dark-primary": "#0e97b5",
      "ultra-light-primary": "#e8f7fa",
      grey: "#9ca4b3",
      "light-grey": "#d7dbe2",
      "dark-grey": "#515b6c",
      white: "#fff",
      orange: "#f2994a",
      "dark-orange": "#ff8437",
      green: "#03d087",
      "dark-green": "#219653",
      red: "#d82045",
    },
    extend: {},
  },
  plugins: [],
};
