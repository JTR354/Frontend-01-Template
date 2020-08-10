const npm = require('npm');
const pkgJson = require('./package.json')
npm.load(pkgJson, () => {
  npm.install('webpack', err => {
    console.log(err);
  })
})