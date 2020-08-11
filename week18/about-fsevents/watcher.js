const fsevents = require('fsevents');
const path = require('path');
const { exec } = require('child_process');

exec('npm run start')

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