var HtmlWebpackPlugin = require('html-webpack-plugin')
var {CleanWebpackPlugin} = require('clean-webpack-plugin')
var path = require('path')

module.exports = {
  // entry: path.join(__dirname, './src/main'),
  entry: path.join(__dirname, './src/carousel'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: '/node_modules/',
      use: 'babel-loader',
    }]
  },
  devServer: {
    stats: 'errors-only',
    open: true,
    overlay: true
  },
  optimization: {
    splitChunks: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    })
  ]
}