const HttpRequest = require('./http/request')
const fs = require('fs')
const path = require('path')
const domParser = require('./dom/dom')
const images = require('images')
const {render} = require('./render/render')
const request = new HttpRequest({
  port: '8088',
  host: '127.0.0.1',
  path: '/getGoodList',
  method: 'GET',
  headers: {
    ['X-token2']: 'token098',
    ['Y-token3']: 'token123',
    ['Content-Type']: 'text/json'
  },
  body: {
    name: 'jtr',
    password: '123213'
  }
})
request.send().then(res => {
  const dom = domParser(res.body.toString())
  fs.writeFileSync(path.join(__dirname, './output.json'), JSON.stringify(dom, ' ', 2))
  let viewport = images(800, 600)
  render(viewport, dom)
  viewport.save('viewport.jpg')
  console.log('render over')
}).catch(err => {
  console.log(err)
})

