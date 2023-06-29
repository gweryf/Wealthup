/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "first-blue": "#26567f",
      "second-blue": "#4b9e99",
      "third-blue": "#26567f",
      "color-orange": "#ea7b31",
      "dark-black": "#000000",
      "light-gray": "#575960",
      "ultra-white": "#ffffff",
      "dirty-green": "#4c8b4e",
      "nice-red": "#ea3323",
    },
  },
  plugins: [],
};
