export class Component {
  constructor(config) {
    this.children = []
    this.props = {}
  }
  setAttribute(name, value) {
    this[name] = value
    this.props[name] = value
  }
  appendChild(vchild) {
    this.children.push(vchild)
  }
  mountTo(range) {
    // range.deleteContents()
    // const vdom = this.render()
    // vdom.mountTo(range)
    this.range = range
    this.update()
  }
  update(bool) {
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
    // const placeholder = document.createComment('place-holder')
    // const range = document.createRange()
    // range.setStart(this.range.endContainer, this.range.endOffset)
    // range.setEnd(this.range.endContainer, this.range.endOffset)
    // range.insertNode(placeholder)
    hack(this.range)
    this.range.deleteContents()
    const vdom = this.render()
    vdom.mountTo(this.range)
    // const range = document.createRange()
    // range.setStartAfter(document.body)
    // range.setEndAfter(document.body)
    // console.log(range, 11)
  }
  setState(state = {}) {
    this.state = Object.assign({}, this.state, state)
    this.update(true)
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    super(type)
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      const eventName = RegExp.$1.replace(/[\s\S]/, (s) => s.toLowerCase())
      this.root.addEventListener(eventName, value)
    } else if (name === 'className') {
      this.root.setAttribute('class', value)
    } else {
      this.root.setAttribute(name, value)
    }
  }
  appendChild(vchild) {
    const range = document.createRange()
    const element = this.root
    if (element.children.length) {
      range.setStartAfter(element.lastChild)
      range.setEndAfter(element.lastChild)
    } else {
      range.setStart(element, 0)
      range.setEnd(element, 0)
    }
    vchild.mountTo(range)
  }
  mountTo(range) {
    function hack(range) {
      const placeholder = document.createComment('place-holder')
      const r = document.createRange()
      r.setStart(range.endContainer, range.endOffset)
      r.setEnd(range.endContainer, range.endOffset)
      r.insertNode(placeholder)
      r.insertNode(placeholder)
      setTimeout(() => {
        placeholder.parentNode.removeChild(placeholder)
      }, 50)
      // r.deleteContents()
    }
    // hack(range)
    range.deleteContents()
    range.insertNode(this.root)
    // parent.appendChild(this.root)
  }
}

class TextWrapper extends Component {
  constructor(type) {
    super(type)
    this.root = document.createTextNode(type)
  }
  mountTo(range) {
    range.deleteContents()
    range.insertNode(this.root)
    // parent.appendChild(this.root)
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
