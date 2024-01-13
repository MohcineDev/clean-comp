/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',

        'yellow-logo': '#fbe418',
        'dark-blue-logo': '#336ebd'
      },
    },
  },
  plugins: [],
}