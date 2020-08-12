const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  devServer: {
    stats: 'errors-only',
    open: false,
    overlay: true
  },
  // devtool: 'evl',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-transform-react-jsx', {
              pragma: 'ToyReact.createElement'
            }]
          ]
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    })
  ],
  mode: 'development',
  optimization: {
    // splitChunks: false
    minimize: false
  }
}