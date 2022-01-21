const svgNS = "http://www.w3.org/2000/svg"


/* generates random circles in specified area */
class Board {

  constructor(width, height, radius) {
    this.w = width
    this.h = height
    this.r = radius
    this.active = false
  }

  toggle() {
    this.active = !this.active
  }

  draw() {
    // create a circle
    let c = document.createElementNS(svgNS, 'circle')
    // change its attributes
    let [rx, ry] = [Math.random(), Math.random()]
    let [x, y] = [rx * this.w, ry * this.h]
    c.setAttribute('cx', x) // center
    c.setAttribute('cy', y)
    c.setAttribute('r', this.r)  // radius
    // locate the <svg> element
    let svg = document.querySelector("svg")
    // insert circle in <svg> element
    svg.append(c)
  }

  // heartbeat
  heart_beat() {
    console.log(`in RUN, active=${this.active}`)
    if (this.active) {
      this.draw()
    }
  }

  // do {this.heart_beat()} every 500 ms
  start() {
    // first parameter here is a function
    // that we want to call every 500 ms
    setInterval(() => this.heart_beat(), 500)
  }
}

let the_board = new Board(200, 200, 4)

// this function is used directly in the HTML
function start_stop() {
  the_board.toggle()
}

// initialize svg size, and start the loop,
// but only once the page is loaded
window.addEventListener('load',
  function () {
    let svg = document.querySelector("svg")
    svg.setAttribute('width', the_board.w)
    svg.setAttribute('height', the_board.h)
    the_board.start()
  })
