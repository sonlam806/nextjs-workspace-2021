module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    colors: {
      primary: '#B0B2C3',
    },
    extend: {
      colors: {
        'text-dark-theme': '#b0b2c3',
        'bg-dark-theme': '#1c1d25',
        'text-white-theme': '#4c4f65',
        'bg-white-theme': '#ebebeb',
      },
    },
  },
  variants: {
    backgroundColor: ['checked', 'dark'],
    text: ['checked', 'dark'],
    boxShadow: ['checked', 'hover', 'dark'],
    animation: ['hover', 'focus'],
    justifyContent: ['odd'],
    alignSelf: ['even'],
    padding: ['odd', 'even'],
  },
  plugins: [],
}

