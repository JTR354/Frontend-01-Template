const http = require('http')
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const stream = require('stream')

const server = http.createServer((req, res) => {
  // const filename = 'space.jpeg'
  // const readStream = fs.createReadStream(path.join(__dirname, filename))
  // const writeStream = fs.createWriteStream(
  //   path.join(__dirname, '../server/public', filename)
  // )
  // stream.pipeline(readStream, zlib.createGunzip(), writeStream, (err) => {
  //   if (err) {
  //     console.error('Pipeline failed.', err)
  //   } else {
  //     res.writeHead(200, { 'Content-Type': 'text/plain' })
  //     res.end(filename + '==>upload:okay')
  //   }
  // })
  // readStream.pipe(zlib.createGunzip()).pipe(writeStream)
  // writeStream.on('finish', () => {
  //   console.log('finish!')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('filename' + '==>upload:okay')
  // })
})

server.listen(8081)
