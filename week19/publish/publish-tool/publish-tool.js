const path = require('path')
const archiver = require('archiver')
const http = require('http')

function upload(output) {
  const zip = archiver('zip', {
    zlib: { level: 9 }
  })
  zip.directory(path.join(__dirname, './package'), false)
  zip.pipe(output)
  zip.finalize()
}

const request = http.request({
  host: 'localhost',
  path: '/?filename=1.html',
  method: 'POST',
  port: 8081,
  headers: {
    'Accept-Encoding': 'br,gzip,deflate',
    'Content-Type': 'application/octect-stream'
  }
})

request.on('response', (response) => {
  console.log(response.statusMessage)
})

upload(request)
