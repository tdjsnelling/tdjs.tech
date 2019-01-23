const autoprefixer = require('autoprefixer')
const stylusMixins = require('stylus-mixins')
const responsiveGrid = require('responsive-grid')
const poststylus = require('poststylus')
const { resolve } = require('path')

module.exports = () => ([
  {
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      localIdentName: '[name]--[local]--[hash:base64:5]'
    }
  },
  {
    loader: require.resolve('stylus-loader'),
    options: {
      use: [
        stylusMixins(),
        responsiveGrid(),
        poststylus([ autoprefixer ])
      ],
      import: [
        '~stylus-mixins/index.styl',
        resolve('./src/stylus/settings.styl')
      ]
    }
  }
])
