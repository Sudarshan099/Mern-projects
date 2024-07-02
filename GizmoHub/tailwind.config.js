/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {
      boxShadow: {
        'custom-card': '-19px 19px 37px #8398d8, 19px -19px 37px #b1ceff',
      },
    },
  },
  plugins: [],
}

