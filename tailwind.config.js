/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0F0F0F',
        'dark-secondary': '#1A1A1A',
        'accent-yellow': '#F9C932',
      },
    },
  },
  plugins: [],
}