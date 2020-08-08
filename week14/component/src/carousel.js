const data = [
  " https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg ",
  " https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg ",
  " https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg ",
  " https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg ",
];

// create
class Carousel {
  constructor() {
    this.root = null
    this.data = null
  }
  render() {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    const fragment = document.createDocumentFragment()
    for (const d of this.data) {
      const img = new Image()
      img.src = d
      img.draggable = false
      fragment.appendChild(img)
    }
    this.root.appendChild(fragment)
    this.autoPlay()
    // this.dragePlay()
  }
  dragePlay() {
    const length = this.data.length
    const childNodes = this.root.childNodes
    const ImgWidth = 500
    let position = 0

    function down(e) {
      const nextPosition = (position + 1) % length
      const lastPosition = (position - 1 + length) % length
      const startX = e.clientX
      const config = [
        {
          node: childNodes[position],
          zero: -position * ImgWidth,
          start: 0,
        },
        {
          node: childNodes[lastPosition],
          zero: -lastPosition * ImgWidth,
          start: -ImgWidth,
        },
        {
          node: childNodes[nextPosition],
          zero: -nextPosition * ImgWidth,
          start: ImgWidth,
        }
      ]
      config.forEach(({node, start, zero}) => {
        node.style.transition = 'ease 0s'
        node.style.transform = `translateX(${start + zero}px)`
      })
      function move(e) {
        let moveX = e.clientX - startX 
        moveX = Math.max(-ImgWidth, moveX)
        moveX = Math.min(ImgWidth, moveX)
        config.forEach(({node, start, zero}) => {
          node.style.transform = `translateX(${moveX + start + zero}px)`
        })
      }
      function up(e) {
        let moveX = e.clientX - startX 
        let offset = 0
        if (moveX < -100) {
          offset = -1
        } else if (moveX > 100){
          offset = 1
        }
        config.forEach(({node, start, zero}) => {
          node.style.transition = ''
          node.style.transform = `translateX(${offset * ImgWidth + start + zero}px)`
        })
        position = (-offset + position + length) % length
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    }
    this.root.addEventListener('mousedown', down)
  }
  autoPlay() {
    const length = this.data.length
    const childNodes = this.root.childNodes
    let position = 0
    const nextPic = () => {
      const nextPosition = (position + 1) % length
      const animations = [
        {
          node: childNodes[position],
          end: `translateX(${-100 - 100 * [position]}%)`,
          start: `translateX(${-100 * [position]}%)`,
        },
        {
          node: childNodes[nextPosition],
          end: `translateX(${-100 * [nextPosition]}%)`,
          start: `translateX(${100 - 100 * [nextPosition]}%)`,
        },
      ]
      animations.forEach(({ node, start }) => {
        node.style.transition = 'ease 0s'
        node.style.transform = start
      })

      setTimeout(() => {
        animations.forEach(({ node, end }) => {
          node.style.transition = '' // '' = use css rules
          node.style.transform = end
        })
        position = nextPosition
      }, 16)

      setTimeout(nextPic, 3000)
    }
    setTimeout(nextPic, 3000)
  }
}

// create
const carousel = new Carousel()
// update
carousel.data = data
carousel.render()
// mount
document.getElementById('app').appendChild(carousel.root)
