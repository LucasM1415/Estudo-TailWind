/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'dark-background': '#343434',
        'navbar-footer': '#1E3A8A',  
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}