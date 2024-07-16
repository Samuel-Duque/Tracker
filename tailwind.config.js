const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./src/components/Calendar/Calendar",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [nextui()],
};
