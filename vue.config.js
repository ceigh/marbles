/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const stylesPath = './src/assets/styles'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/marbles/'
    : '/',

  productionSourceMap: false,

  pluginOptions: {
    lintStyleOnBuild: true
  },

  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `
@import '${stylesPath}/variables';
@import '${stylesPath}/mixins';
`
      }
    }
  },

  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
}
