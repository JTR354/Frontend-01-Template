// const childrenSymbol = Symbol('children')
export class Component {
  constructor(config) {
    // this[childrenSymbol] = []
    this.props = {}
    this.state = {}
    this.type = this.constructor.name
    this.children = []
  }
  setAttribute(name, value) {
    this[name] = value
    this.props[name] = value
  }
  appendChild(vchild) {
    // this[childrenSymbol].push(vchild)
    this.children.push(vchild)
  }
  mountTo(range) {
    this.range = range
    this.update()
  }
  update() {
    const vdom = this.vdom
    if (this.oldVdom) {
      // console.log(this.oldVdom)
      let isSameNode = (node1, node2) => {
        if (String(node1) !== String(node2)) {
          return false
        }
        if (node1.type !== node2.type) {
          return false
        }
        if (
          Object.keys(node2.props).length !== Object.keys(node1.props).length
        ) {
          return false
        }
        for (const name in node1.props) {
          // if (
          //   typeof node1.props[name] === 'function' &&
          //   typeof node2.props[name] === 'function'
          // ) {
          //   continue
          // }
          if (node1.props[name] !== node2.props[name]) {
            return false
          }
        }
        return true
      }
      let isSameTree = (node1, node2) => {
        if (!isSameNode(node1, node2)) {
          return false
        }
        // console.log(node1.children.length - node2.children.length)
        if (node2.children.length !== node1.children.length) {
          return false
        }
        for (let i = 0; i < node1.children.length; i++) {
          if (!isSameTree(node1.children[i], node2.children[i])) {
            return false
          }
        }
        return true
      }
      let replace = (newTree, oldTree) => {
        // console.log('new:', newTree)
        // console.log('old', oldTree)
        if (isSameTree(newTree, oldTree)) {
          console.log('all same')
          return
        } else if (!isSameNode(newTree, oldTree)) {
          console.log('all different')
          // console.log(newTree, oldTree)
          // console.log(vdom)
          // newTree.mountTo(oldTree.range, true)
          if (oldTree) {
            newTree.mountTo(oldTree.range, true)
          } else {
            // console.log('reflow', this.range, vdom)
            vdom.mountTo(this.range)
          }
        } else {
          for (let i = 0; i < newTree.children.length; i++) {
            replace(newTree.children[i], oldTree.children[i])
          }
        }
      }
      // console.log(this.oldVdom)
      replace(vdom, this.oldVdom)
    } else {
      vdom.mountTo(this.range)
    }
    this.oldVdom = vdom
  }
  get vdom() {
    // console.log(this.render().vdom)
    return this.render().vdom
  }
  setState(state = {}) {
    this.state = Object.assign({}, this.state, state)
    this.update(true)
  }
}

/**
 * ElementWrapper
 */
class ElementWrapper extends Component {
  constructor(type) {
    super(type)
    this.type = type
    this.props = Object.create(null)
    // this[childrenSymbol] = []
    this.children = []
  }
  get vdom() {
    return this
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(vchild) {
    // this[childrenSymbol].push(vchild)
    this.children.push(vchild.vdom)
  }
  mountTo(range, bool) {
    this.range = range
    function hack(range) {
      const placeholder = document.createComment('place-holder')
      const r = document.createRange()
      r.setStart(range.endContainer, range.endOffset)
      r.setEnd(range.endContainer, range.endOffset)
      r.insertNode(placeholder)
      if (bool) {
        placeholder.parentNode.removeChild(placeholder)
      }
    }
    hack(this.range)
    range.deleteContents()
    const element = document.createElement(this.type)
    for (const name in this.props) {
      const value = this.props[name]
      if (name.match(/^on([\s\S]+)$/)) {
        const eventName = RegExp.$1.replace(/[\s\S]/, (s) => s.toLowerCase())
        element.addEventListener(eventName, value)
      } else if (name === 'className') {
        element.setAttribute('class', value)
      } else {
        element.setAttribute(name, value)
      }
    }
    for (const child of this.children) {
      const r = document.createRange()
      if (element.children.length) {
        r.setStartAfter(element.lastChild)
        r.setEndAfter(element.lastChild)
      } else {
        r.setStart(element, 0)
        r.setEnd(element, 0)
      }
      child.mountTo(r)
    }
    range.insertNode(element)
  }
}

class TextWrapper extends Component {
  constructor(type) {
    super(type)
    this.content = type
    this.type = '#text'
    this.props = Object.create(null)
    this.children = []
  }
  mountTo(range) {
    this.range = range
    const element = document.createTextNode(this.content)
    range.deleteContents()
    range.insertNode(element)
  }
  get vdom() {
    return this
  }
}

class ToyReact {
  static createElement(type, attrribute, ...children) {
    let element
    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      element = new type()
    }
    for (const name in attrribute) {
      element.setAttribute(name, attrribute[name])
    }

    const insertChild = (children) => {
      for (let child of children) {
        if (child == null) {
          child = ''
        }
        if (typeof child === 'object' && child instanceof Array) {
          insertChild(child)
        } else {
          if (!(typeof child === 'object' && child instanceof Component)) {
            child = String(child)
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          }
          element.appendChild(child)
        }
      }
    }
    insertChild(children)
    return element
  }

  static render(vdom, element) {
    const range = document.createRange()
    if (element.children.length) {
      range.setStartAfter(element.lastChild)
      range.setEndAfter(element.lastChild)
    } else {
      range.setStart(element, 0)
      range.setEnd(element, 0)
    }
    vdom.mountTo(range)
  }
}

ToyReact.Component = Component

export default ToyReact
