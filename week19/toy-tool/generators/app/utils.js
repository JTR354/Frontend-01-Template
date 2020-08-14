var fs = require('fs')
var path = require('path')

function resolve(...p) {
  return path.join(__dirname, ...p)
}

exports.getTemplates = function getTemplates(...args) {
  const files = fs.readdirSync(resolve(...args))
  let arr = []
  for (const name of files) {
    let stat = fs.statSync(resolve(...args, name))
    const fullName = args.slice()
    fullName.push(name)
    if (stat.isDirectory()) {
      arr = arr.concat(getTemplates(...fullName))
    } else {
      arr.push(fullName.slice(1).join('/'))
    }
  }
  return arr
}
