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
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'scroll-slow': 'scroll-slow 45s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { 
            transform: 'translateX(0)' 
          },
          '100%': { 
            transform: 'translateX(-50%)' 
          },
        },
        'scroll-slow': {
          '0%': { 
            transform: 'translateX(0)' 
          },
          '100%': { 
            transform: 'translateX(-50%)' 
          },
        },
      },
    },
  },
  plugins: [],
}