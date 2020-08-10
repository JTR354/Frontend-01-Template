const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  // devServer: {
  //   stats: 'errors-only',
  //   open: false,
  //   overlay: true
  // },
  // devtool: 'evl',
  // module: {
  //   rules: [{
  //     test: /\.jsx?$/,
  //     use: {
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['@babel/preset-env'],
  //       }
  //     }
  //   }]
  // },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    // })
  ],
  mode: 'development',
  optimization: {
    minimize: false
  }
}