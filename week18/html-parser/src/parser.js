/**
 * 1.拆分文件
 * 2.创建状态机
 * 3.解析标签
 * 4.创建元素
 * 5.处理属性
 * 6.构建DOM树
 * 7.文本节点
 * 目的是什么?了解浏览器工作原理.第一步就是把html字符流转换成dom树
 */
export const EOF = Symbol('EOF') // END OF FILE
let currentToken
let currentAttribute
let currentTextNode = null
let stack = [{type: 'document', children: []}]

// const {computeCSS, addCSSRules} = require('../cssom/cssom')
// const {layout} = require('../layout/layout')

function emit(token) {
  // if (token.type !== 'text') {
  //   console.log(token)
  // }
  let top = stack[stack.length - 1]
  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      tagName: token.tagName,
      children: [],
      attributes: []
    }
    for (let p in token) {
      if (p !== 'type' && p !== 'tagName' && p !== 'isSelfClosing') {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }

    // element = computeCSS(element, stack)

    top.children.push(element)
    if (!token.isSelfClosing) {
      stack.push(element)
    }
    currentTextNode = null
  } else if (token.type === 'endTag') {
    if (top.tagName !== token.tagName) {
      throw new Error('Tag start end doesnt match!')
    } else {
      // 遇到style标签时,执行添加css规则操作
      if (top.tagName === 'style') {
        // addCSSRules(top.children[0].content)
      }
      // layout(top)
      stack.pop()
    }
    currentTextNode = null
  } else if (token.type === 'text') {
    if (currentTextNode == null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode)
    }
    currentTextNode.content += token.content
  }
}

function data (c) {
  if (c === '<') {
    return tagOpen
  } else if (c === EOF) {
    return
  } else {
    emit({
      type: 'text',
      content: c
    })
    return data
  }
}

function tagOpen(c) {
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'startTag',
      tagName: ''
    }
    return tagName(c)
  } else if (c === EOF) {
    throw new Error('This is an eof-before-tag-name parse error')
  } else {
    return data(c)
  }
}

function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName(c)
  } else if (c === '>') {
    throw new Error('This is a missing-end-tag-name parse error.')
  } else if (c === EOF) {
    throw new Error('This is an eof-before-tag-name parse error.')
  } else {
    throw new Error('This is an invalid-first-character-of-tag-name parse error.')
  }
}

function tagName(c) {
  if (c.match && c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '>') {
    emit(currentToken)
    return data
  } else if (c.match && c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c.toLowerCase()
    return tagName
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error.')
  } else {
    return tagName
  }
}

function selfClosingStartTag(c) {
  if (c === '>') {
    currentToken.isSelfClosing = true
    emit(currentToken)
    return data
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error. ')
  } else {
    throw new Error('This is an unexpected-solidus-in-tag parse error. ')
  }
}

function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f \/>]$/ || c === EOF)){
    return afterAttributeName(c)
  } else if (c === '=') {
    throw new Error('This is an unexpected-equals-sign-before-attribute-name parse error. ')
  } else {
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName(c)
  }
}

function attributeName(c) {
  if (c.match(/^[\t\n\f \/>]$/ || c === EOF)) {
    return afterAttributeName(c)
  } else if (c === '=') {
    return beforeAttributeValue
  } else if (c.match(/^["'<]$/)){
    throw new Error('This is an unexpected-character-in-attribute-name parse error. ')
  } else {
    currentAttribute.name += c
    return attributeName
  }
}

function afterAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return afterAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '=') {
    return beforeAttributeValue
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error. ')
  } else {
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName
  }
}

function beforeAttributeValue(c) {
  if(c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeValue
  } else if (c === '"') {
    return  doubleQuotedAttributeValue
  } else if (c === '\'') {
    return singleQuotedAttributeValue
  } else if (c === '>') {
    throw new Error('This is a missing-attribute-value parse error. ')
  } else {
    return unQuotedAttributeValue
  }
}

function doubleQuotedAttributeValue(c) {
  if (c === '"') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterAttributeValueQuoted
  } else if (c === '&') {
    currentAttribute.value += c
    return doubleQuotedAttributeValue
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error.')
  } else {
    currentAttribute.value += c
    return doubleQuotedAttributeValue
  }
}

function singleQuotedAttributeValue(c) {
  if (c === '\'') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterAttributeValueQuoted
  } else if (c === '&') {
    currentAttribute.value += c
    return doubleQuotedAttributeValue
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error.')
  } else {
    currentAttribute.value += c
    return singleQuotedAttributeValue
  }
}

function unQuotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    currentToken[currentAttribute.name] = currentAttribute.value
    return beforeAttributeName
  } else if(c === '&') {
    currentAttribute.value += c
    return unQuotedAttributeValue
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c.match(/^["'<=`]$/)) {
    throw new Error('This is an unexpected-character-in-unquoted-attribute-value parse error.')
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error. ')
  } else {
    currentAttribute.value += c
    return unQuotedAttributeValue
  }
}

function afterAttributeValueQuoted(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error. ')
  } else {
    throw new Error('This is a missing-whitespace-between-attributes parse error.')
  }
}

function parserHTML(html) {
  let state = data
  for (let c of html) {
    state = state(c)
  }
  state = state(EOF)
  return stack[0]
}

export default parserHTML