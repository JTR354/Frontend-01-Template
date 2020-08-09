const stdout = process.stdout
const stdin = process.stdin

const UP = '\u001b[A'
const DOWN = '\u001b[B'
const RIGHT = '\u001b[C'
const LEFT = '\u001b[D'

const write = (s) => {
  stdout.write(s)
}
const up = (n = 1) => {
  stdout.write('\033[' + n + 'A')
}
const down = (n = 1) => {
  stdout.write('\033[' + n + 'B')
}
const right = (n = 1) => {
  stdout.write('\033[' + n + 'C')
}
const left = (n = 1) => {
  stdout.write('\033[' + n + 'D')
}

function prompt(reject, resolve) {
  stdin.setEncoding('utf-8')
  stdin.setRawMode(true)
  stdin.resume()
  stdin.on('data', resolve)
  stdin.on('error', reject)
}

function drawSelect(choices, selected = 0) {
  for (let i=0; i < choices.length; i++) {
    write(`[${selected === i ? 'x' : ' '}] ${choices[i]}\n`)
  }
  up(choices.length)
  right()
}

function move(fn) {
  write(' ')
  left()
  fn()
  write('x')
  left()
}

 function main(choices = ['vue', 'react', 'angular']) {
  return new Promise((resolve, reject) => {
    let selected = 0
    drawSelect(choices)
    prompt((err) => {
      console.log(err)
      reject(err)
    }, (data) => {
      if (data === '\u0003') {
        process.exit()
      }
      if (data === UP && selected > 0) {
        move(up)
        selected--
      }
      if (data === DOWN && selected < choices.length - 1) {
        move(down)
        selected++
      }
      if (data === '\r') {
        down(choices.length - selected)
        write('you selectd ' + choices[selected] + '!')
        resolve(selected)
        process.exit()
      }
    })
  })
}

main().then(res => {
  console.log(res)
})

exports.main = main