/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "517px",
      // => @media (min-width: 640px) { ... }

      tablet: "960px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1100px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [],
};
