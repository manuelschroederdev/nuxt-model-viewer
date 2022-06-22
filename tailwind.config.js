module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  safelist: ['bg-black'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    extend: {
      colors: {
        primary: '#50b0ae',
        secondary: '#1c243d',
      },
    },
  },
}
