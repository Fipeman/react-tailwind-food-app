const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // red: colors.red,
      red: '#f73426',
      gray: colors.gray,
      slate: colors.slate,
      // blue: colors.orange,
      white: colors.white,
      gray2: '#4d4d4d'
      },
      screens: {
        'sm': '300px',
        'lg': '700px'
        },
      fontFamily: {
        Inter: ['Inter', "sans-serif"]
        // 'sans': ['ui-sans-serif', 'system-ui'],
        // 'serif': ['ui-serif', 'Georgia'],
        // 'mono': ['ui-monospace', 'SFMono-Regular'],
        // 'montserrat': ['Montserrat'],
       },
      extend: {
        backgroundImage: theme => ({
         'hero': "url('/src/assets/bujiaImg.jpg')",
         'action': "url('/src/assets/action.png')",
         'Gradient': "linear-gradient(to right top, #4d4d4d, #565656, #606060, #696969, #737373, #7d7d7d, #888888, #929292, #a0a0a0, #afafaf, #bdbdbd, #cccccc)",
        //  'Gradient2': "bg-gradient-to-bl from-slate-50 via-gray-400 to-red-900"
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
