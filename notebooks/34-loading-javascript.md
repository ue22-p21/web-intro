---
celltoolbar: Slideshow
jupytext:
  cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
  formats: md:myst
  notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: JavaScript (Node.js)
  language: javascript
  name: javascript
nbhosting:
  title: loading js
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

# loading JS in the browser

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## open topic

+++

* loading javascript is somehow tricky and is **still an open topic** because: 
  * how network work
  * of complex dependency that can rise in real code 
  * typical use case module X needs module Y   
    just like when a Python module does `import another`

we will come back later on this topic, but for now stay simple

+++ {"slideshow": {"slide_type": "slide"}}

## simplest case

+++

for our use case we only need to load one fragment of code

* where a single HTML page needs to load one JS fragment
* there is one simple way : the `<script>` tag
  * that comes in 2 flavours,
  * whether code is inline or in a separate location

+++ {"slideshow": {"slide_type": "slide"}}

### `<script>` with inline code

+++ {"cell_style": "center"}

* quite simply, you can inject some JS code 
* right into your HTML document 
* through a `<script>` tag

+++ {"incorrectly_encoded_metadata": "cell_style=\"center", "slideshow": {"slide_type": ""}}

```html
<script>
    
  function hello() {
    console.log("Hello world");
  }

  hello()
    
</script>
```

+++ {"slideshow": {"slide_type": "slide"}}

### `<script>` : load a URL

+++

* most often though, code is stored in a separate location
  * either as a companion to the HTML page
  * or in a remote location
* for that, use `<script src="some-url"></script>`

+++ {"slideshow": {"slide_type": "slide"}}

### `<script>` - examples

+++ {"slideshow": {"slide_type": ""}}

* behaviour of `<script>` tag is similar to the load of css files
  * `<script src="foo.js"></script>` loads `foo.js` from the same directory as the current page
  * `<script src="/path/foo.js"></script>` loads `/path/foo.js` from current location
  * `<script src="https://url.com/path/foo.js"></script>` loads `/path/foo.js` from the given absolute url
* You can use the attribute `defer` to ensure to run the script once the entire page is loaded: `<script src="foo.js" defer></scritp>`

+++ {"slideshow": {"slide_type": "slide"}}

## step #2

now that you know the basic of JavaScript, you have to
* write a HTML file
* that loads a JS code
* that draws a circle of dots as follows  
  (circle colors do not matter)

+++ {"slideshow": {"slide_type": "slide"}}

### special note about creating circle

to draw a circle you have to use a tag that belongs a given namespace  
we will not go in detail about namespaces in this course,  
but to create the circle element you have to specify the namespace as follows:

```javascript
let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
```

+++

<div class="rise-footnote">
    
in a nutshell, the namespaces are designed to allow for more tags 
than the default ones (like e.g. &lt;div&gt;)
  
    
</div>

```{code-cell}
---
slideshow:
  slide_type: slide
---
tools.sample_from_stem("../samples/spinning-wheel/step2", {height: '25em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## go to step #3

next step is to change the color of circles when we press the button,  
so let's learn about callback
