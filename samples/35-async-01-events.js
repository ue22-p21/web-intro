
function onclick(event) {
  // for inspection in the console
  console.log("CLICK", event)
  // display in dedicated area 'result'
  document.getElementById("result").textContent
    = `clicked ${event.offsetX}x${event.offsetY}`
}

function onkeydown(event) {
  // for inspection in the console
  console.log("KEYDOWN", event)
  // display in dedicated area 'result'
  document.getElementById("result").textContent
    = `typed key ${event.key}`
}

function onload(event) {
  console.log("page loaded, arming callbacks")
  // attach callbacks
  document.getElementById("textual-input")
    .addEventListener("keydown", onkeydown)
  document.getElementById("graphic-svg")
    .addEventListener("click", onclick)
}

window.addEventListener("load", onload)
