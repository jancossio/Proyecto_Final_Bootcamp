/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};