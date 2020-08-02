
function createElement(Cls, attribute, ...children ) {
  let o
  if (typeof Cls === 'function') {
    o = new Cls()
  } else {
    o = new Wrap({tag: Cls})
  }

  if (attribute)
  for (let [key,value] of Object.entries(attribute)) {
    o.setAttribute(key, value)
  }

  if(children)
  for (let child of children) {
    o.appendChild(child)
  }

  return o
}

class Com {
  constructor(config) {
    this.root = document.createElement('div')
    this.children = []
  }
  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }
  appendChild(child) {
    this.children.push(child)
  }

}

class Wrap {
  constructor(config) {
    this.root = document.createElement(config.tag)
    this.children = []
  }
  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }
  appendChild(child) {
    this.children.push(child)
  }
  moutedTo(parent) {
    parent.moutedTo(this.root)
  }
}

const component = <div>
  <p color="red">123<span>76</span></p>
  {/* <i>6</i>
  <a>62</a>
  <Com>
    <Com id={1}>{
      [1, 2, 3].map(() => <span></span>)
    }</Com>
  </Com> */}
</div>

console.log(component)