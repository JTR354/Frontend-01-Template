const http = require('http')
const path = require('path')
const unzipper = require('unzipper')

const server = http.createServer((req, res) => {
  req.pipe(
    unzipper.Extract({
      path: path.join(__dirname, '../server/public', 'dist')
    })
  )
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('upload:okay')
    console.log('success!')
  })
  req.on('error', () => {
    res.writeHead(500)
    res.end()
  })
})

server.listen(8081)
console.log('Sever listen on 8081')
