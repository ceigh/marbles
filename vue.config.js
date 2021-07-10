/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    lintStyleOnBuild: true
  },

  css: {
    extract: false
  },

  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
}
