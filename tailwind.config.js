/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: "rgba(36, 39, 49, 1)",
        primarywhite: "rgba(224, 228, 231, 1)",
        primarypurple: "rgba(161, 98, 247, 1)",
        graydark: "rgba(124, 124, 141, 1)",
        graywhite : "rgba(255, 255, 255, 1)",
        graydark4: "rgba(124, 124, 141, 1)"
      },
    },
  },
  plugins: [],
};
