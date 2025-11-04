/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        maroon: '#7d0a0a',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'georgia': ['Georgia', 'serif'],
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'adelia': ['Adelia', 'cursive'],
      },
    },
  },
  plugins: [],
}
