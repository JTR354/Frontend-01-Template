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
    // this.autoPlay()
    this.dragePlay()
  }
  dragePlay() {
    const length = this.data.length
    const childNodes = this.root.childNodes
    const body = document.documentElement
    let position = 0

    const ImgWidth = 500
    function down(e) {
      const nextPosition = (position + 1) % length
      const prevPosition = (position - 1 + length) % length
      const startX = e.clientX
      let moveX
      childNodes[position].style.transition = 'ease 0s'
      childNodes[nextPosition].style.transition = 'ease 0s'
      childNodes[prevPosition].style.transition = 'ease 0s'
      function move(e) {
        moveX = e.clientX - startX 
        moveX = Math.max(-ImgWidth, moveX)
        moveX = Math.min(ImgWidth, moveX)
        childNodes[position].style.transform = `translateX(${moveX + -position * ImgWidth}px)`
        childNodes[nextPosition].style.transform = `translateX(${moveX + -nextPosition * ImgWidth + ImgWidth}px)`
        childNodes[prevPosition].style.transform = `translateX(${moveX + -prevPosition * ImgWidth - ImgWidth}px)`
      }
      function up() {
        childNodes[position].style.transition = ''
        childNodes[nextPosition].style.transition = ''
        childNodes[prevPosition].style.transition = ''
        if (moveX > 100) {
          childNodes[position].style.transform = `translateX(${-position * ImgWidth + ImgWidth}px)`
          childNodes[nextPosition].style.transform = `translateX(${-nextPosition * ImgWidth + ImgWidth * 2}px)`
          childNodes[prevPosition].style.transform = `translateX(${-prevPosition * ImgWidth}px)`
          childNodes[position].removeEventListener('mousedown', down)
          position = prevPosition
        } else if (moveX < -100) {
          childNodes[position].style.transform = `translateX(${-position * ImgWidth - ImgWidth}px)`
          childNodes[nextPosition].style.transform = `translateX(${-nextPosition * ImgWidth}px)`
          childNodes[prevPosition].style.transform = `translateX(${-prevPosition * ImgWidth - ImgWidth - ImgWidth}px)`
          childNodes[position].removeEventListener('mousedown', down)
          position = nextPosition
        } else {
          childNodes[position].style.transform = `translateX(${-position * ImgWidth}px)`
          childNodes[nextPosition].style.transform = `translateX(${-nextPosition * ImgWidth + ImgWidth}px)`
          childNodes[prevPosition].style.transform = `translateX(${-prevPosition * ImgWidth - ImgWidth}px)`
        }
        body.removeEventListener('mousemove', move)
        setTimeout(() => {
          childNodes[position].addEventListener('mousedown', down)
        }, 16)
      }
      body.addEventListener('mousemove', move)
      body.addEventListener('mouseup', up)
    }
    childNodes[position].addEventListener('mousedown', down)
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
