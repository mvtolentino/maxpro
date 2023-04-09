/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        mintGreen: 'hsl(174, 62%, 47%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      },
    },
  },
  plugins: [],
}

