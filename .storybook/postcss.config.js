const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './src/**/*.js',
      './src/**/*.tsx',
      './pages/**/*.ts',
      './pages/**/*.tsx',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = require('../postcss.config.js')
