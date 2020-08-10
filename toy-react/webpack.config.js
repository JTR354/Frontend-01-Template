const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry: {
    app: path.join(__dirname, './src/main.js')
  },
  devServer: {
    stats: 'errors-only',
    open: false,
    overlay: true
  },
  // devtool: 'evl',
  module: {
    rules: [{
      test: /\.jsx?$/,
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
      template: './index.html'
    })
  ],
  mode: 'development',
  optimization: {
    minimize: false
  }
}