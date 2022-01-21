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
  title: more exos
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": ""}}

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

# practice - additional assignments

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": ""}}

## pythagore

+++

you are tasked to write a "graphical demonstration" for the Pythagorean Theorem, getting inspiration from the page below

the sample app is not responsive, you will need to open it in a separate window

```{code-cell}
:hide_input: false

tools.sample_from_stem("../samples/pythagore", {sources_show: false})
```

+++ {"slideshow": {"slide_type": ""}}

## fibonacci and the golden number 

you are asked to write a small app as a html+css+js that explores the neighbourhood between fibonacci numbers and the golden number, taking - as loose as you want - inspiration from the page below

here again the sample app is not responsive, you will need to open it in a separate window

**HINT** the slope of the 2 fixed rules is of course the golden ratio and its inverse

```{code-cell}
:hide_input: false

// the minified version somehow was not working...
tools.sample_from_stem("../samples/fibonacci", {sources_show: false})
```

## a snake

+++

* clone the github repo from https://github.com/patorjk/JavaScript-Snake.git
* open `index.html` in your browser - check that the game works for you
* could you read the code ?  
  if not what percentage can you read ?
* imagine some change that you'd like to make on the game  
  be it in terms of colors, speed, behaviour, whatever you  
  think could improve the game  
  are you able to implement that change ?
