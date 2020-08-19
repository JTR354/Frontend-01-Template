const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const filename = 'package'
// const readStream = fs.createReadStream(
//   path.join(__dirname, 'package', filename)
// )
const writeStream = fs.createWriteStream(
  path.join(__dirname, '../server/public', filename + '.zip')
)

const zip = archiver('zip', {
  zlib: { level: 9 }
})
zip.directory(path.join(__dirname, './package'), false)
zip.pipe(writeStream)
// readStream.pipe(gzip.pipe(writeStream))
writeStream.on('end', () => {
  console.log(' zip end')
})
zip.finalize()
