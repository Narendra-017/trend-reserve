/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind scans all components
  ],
  theme: {
    extend: {
      animation: {
        truck: 'truckMove 3s linear infinite',
      },
      keyframes: {
        truckMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
