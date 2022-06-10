const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // red: colors.red,
      red: '#f73426',
      gray: colors.gray,
      // blue: colors.orange,
      white: colors.white,
      gray2: '#4d4d4d'
      },
      screens: {
        'sm': '300px',
        'lg': '700px'
        },
      // fontFamily: {
      //   'sans': ['ui-sans-serif', 'system-ui'],
      //   'serif': ['ui-serif', 'Georgia'],
      //   'mono': ['ui-monospace', 'SFMono-Regular'],
      //   'montserrat': ['Montserrat'],
      //  },
      extend: {
        backgroundImage: theme => ({
         'hero': "url('/src/assets/bujiaImg.jpg')",
         'action': "url('/src/assets/action.png')",
        })
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
