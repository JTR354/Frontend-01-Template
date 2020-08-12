const { merge } = require('webpack-merge');
const {webpackConfigBase} = require('share');
const path = require('path')

module.exports = merge(webpackConfigBase, {
  entry: {
    app: path.join(__dirname, './src/main.js')
  },
})