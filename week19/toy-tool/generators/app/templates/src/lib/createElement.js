export function createElement(Cls, attribute, ...children) {
  let o

  if (typeof Cls === 'function') {
    o = new Cls()
  } else {
    o = new Wrap(Cls)
  }

  for (const name in attribute) {
    o.setAttribute(name, attribute[name])
  }

  const visit = (children) => {
    for (let child of children) {
      if (child instanceof Array) {
        visit(child)
        continue
      }
      if (typeof child === 'string') {
        child = new Text(child)
      }
      o.appendChild(child)
    }
  }
  visit(children)

  return o
}

class Text {
  constructor(text) {
    this.root = document.createTextNode(text)
  }
  moutedTo(parent) {
    parent.appendChild(this.root)
  }
}

class Wrap {
  constructor(type) {
    this.root = document.createElement(type)
    this.children = []
  }
  get style() {
    return this.root.style
  }
  set style(value) {
    this.root.style = value
  }
  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }
  appendChild(child) {
    this.children.push(child)
  }
  addEventLisinter() {
    this.root.addEventLisinter(...arguments)
  }
  removeEventLisinter() {
    this.root.removeEventLisinter(...arguments)
  }
  moutedTo(parent) {
    parent.appendChild(this.root)
    for (const child of this.children) {
      child.moutedTo(this.root)
    }
  }
}
