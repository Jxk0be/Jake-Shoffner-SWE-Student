/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '76px',
      // => @media (min-width: 576px) { ... }

      'md': '800px',
      // => @media (min-width: 960px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1440px) { ... }

      'xlg': '2000px',
    },
  },
  plugins: [],
}

