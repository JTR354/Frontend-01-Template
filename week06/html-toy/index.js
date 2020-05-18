const fs = require('fs')
const path = require('path')
const requestBody = fs.readFileSync(path.join(__dirname, './target.html'))
const parserHTML = require('./html-parse')
const dom = parserHTML(requestBody.toString())
console.log(dom)