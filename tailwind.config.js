/** @type {import('tailwindcss').Config} */;
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: {
          brightRed: 'hsl(12, 88%, 59%)',
          darkBlue: 'hsl(228, 39%, 23%)'
        },
        secondary: {
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryPaleRed: 'hsl(13, 100%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)'
        }
      },
      fontFamily: {
        'beV': ['Be Vietnam Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
