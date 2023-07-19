/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradientStart': '#000218',
        'gradientEnd': '#00042A',
      }
    },
  },
  plugins: [],
}

