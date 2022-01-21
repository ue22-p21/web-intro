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
  display_name: Javascript (Node.js)
  language: javascript
  name: javascript
nbhosting:
  title: exo - calculator
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

# practice : a calculator

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

start from this tutorial here
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

it comes [**with the html and css template**](https://codepen.io/zellwk/pen/pLgmGL) for a - rather nice btw - yet simple, calculator

the assignment is to write the **javascript companion** so that

* the device **actually does calculations**
* in a first step, ignore the '.' and just write an integer calculator

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
---
tools.from_samples("calculator")
```

```{code-cell}

```
