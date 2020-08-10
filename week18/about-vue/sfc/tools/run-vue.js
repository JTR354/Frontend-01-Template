const { compileTemplate } = require('@vue/compiler-sfc') 

const source = `<div><p>{{ render }}</p></div>`

const result = compileTemplate({ filename: 'example.vue', source })

console.log(result)
