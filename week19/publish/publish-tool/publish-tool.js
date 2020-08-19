const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const http = require('http')

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

const request = http.get({
  host: 'localhost',
  path: '/?filename=1.html',
  port: 8081,
  headers: { 'Accept-Encoding': 'br,gzip,deflate' }
})

request.on('response', (response) => {
  console.log(response.headers['content-encoding'])
})
