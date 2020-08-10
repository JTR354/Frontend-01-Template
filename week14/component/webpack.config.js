var HtmlWebpackPlugin = require('html-webpack-plugin')
var {CleanWebpackPlugin} = require('clean-webpack-plugin')
var path = require('path')

module.exports = (env) => {
  return {
    // entry: path.join(__dirname, './src/main'),
    // entry: path.join(__dirname, './src/carousel'),
    entry: {
      main: path.join(__dirname, './src/main'),
      carousel: path.join(__dirname, './src/carousel')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: env && env.production ? 'https://jtr354.github.io/Frontend-01-Template/week14/component/dist/': ''
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
      minimize: false
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html'),
      })
    ]
  }
}