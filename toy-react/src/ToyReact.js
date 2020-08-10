export class Componet {
  constructor(config) {
    this.children = []
  }
  setAttribute(name, value) {
    this[name] = value
  }
  mountTo(parent) {
    const vdom = this.render()
    vdom.mountTo(parent)
  }
  appendChild(vchild) {
    this.children.push(vchild)
  }
}

class ElementWrapper extends Componet {
  constructor(type) {
    super(type)
    this.root = document.createElement(type)
  }
  setAttribute(name, value){
    this.root.setAttribute(name, value)
  }
  appendChild(vchild) {
    vchild.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper extends Componet {
  constructor(type) {
    super(type)
    this.root = document.createTextNode(type)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class ToyReact {
  static createElement(type, attrribute, ...children) {
    let element
    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      element = new type
    }
    for (const name in attrribute) {
      element.setAttribute(name, attrribute[name])
    }

    const insertChild = (children) => {
      for (let child of children) {
        if (typeof child === 'object' &&  child instanceof Array) {
          insertChild(child)
        } else {
          if (!(typeof child === 'object' && child instanceof Componet)) {
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
    console.log(vdom)
    vdom.mountTo(element)
  }
}

ToyReact.Componet = Componet


export default ToyReact