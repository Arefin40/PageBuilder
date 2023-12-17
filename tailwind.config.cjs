/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./index.html", "./src/**/*.{html,svelte,js,ts,jsx,tsx}"],
   darkMode: ["class"],
   theme: {
      extend: {
         fontFamily: {
            sans: ['"Proppins"', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            border: "#303030",
            font: {
               primary: "#cacaca",
               secondary: "#8c8c8c",
            },
            symbol: {
               primary: "#a2a2a2",
               secondary: "#4b4b4b",
            },
            dark: {
               1: "#2f2f2f",
               2: "#242424",
               3: "#1b1b1b",
            },
         },
         spacing: {
            4.5: "1.125rem",
            5.5: "1.375rem",
            6.5: "1.625rem",
            7.5: "1.875rem",
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
