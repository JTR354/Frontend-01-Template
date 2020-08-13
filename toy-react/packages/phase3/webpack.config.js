var path = require('path')
const { merge } = require('webpack-merge')
const { webpackConfigBase } = require('share')

module.exports = (env) => {
  return merge(webpackConfigBase, {
    entry: {
      main: path.join(__dirname, './src/main')
    },
    output: {
      publicPath:
        env && env.production
          ? 'https://jtr354.github.io/Frontend-01-Template/toy-react/packages/phase3/dist/'
          : ''
    }
  })
}
