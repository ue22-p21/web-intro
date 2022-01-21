window.addEventListener('load',
  // as always, we use an anonymous function
  // to act as a namespace so as not to leak
  // any global variable name

  () => {
    let index = 0
    const colors = ["#f6e5f5", "#f6e7e6"]

    /* what to do cyclically */
    function tick() {
      index = (index + 1) % 2
      let color = colors[index]
      // spot the body element
      document.getElementsByTagName("body")[0]
        // and change its background color
        .style.backgroundColor = color
    }

    // call it the first time without waiting one second
    tick()
    // make sure it does run cyclically
    window.setInterval(tick, 1000)
})
