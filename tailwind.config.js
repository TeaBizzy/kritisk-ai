/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      logo: ['Anton', 'sans-serif'],
      main: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
