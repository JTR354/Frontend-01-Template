const path = require('path');
const os = require('os')
const { exec } = require('child_process');

exec('npm run start')

if (os.platform() === 'win32') {
  const chokidar = require('chokidar')
  const watch = chokidar.watch(path.join(__dirname, './src'))
  watch.on('change', path => {
    console.log(`File ${path} has been changed`)
    exec('npm run build')
  })
} else {
  const fsevents = require('fsevents');
  function watch(cb) {
    const stop = fsevents.watch(path.join(__dirname, './src'), (path, flags, id) => {
      const info = fsevents.getInfo(path, flags, id);
      console.log(info)
      exec('npm run build')
      stop().then(() => {
        watch()
      })
    })
  }
  watch()
}