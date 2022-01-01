module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': '#502050',
        'soft-pink': '#ee68a4',
        // neutral
        'dark-grayish-magenta': '#937b92',
        'light-grayish-magenta': '#f7f2f7',
      },

      fontFamily: {
        'spartan': ['Spartan', 'sans-serif']
      },

      backgroundImage: {
        'mobile-top': "url('/images/bg-pattern-top-mobile.svg')",
        'mobile-bottom': "url('/images/bg-pattern-bottom-mobile.svg')",
        'desktop-top': "url('/images/bg-pattern-desktop-mobile.svg')",
      }
    },
  },
  plugins: [],
}
