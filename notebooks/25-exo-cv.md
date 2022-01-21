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
  title: 'practice: your resume'
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

# putting it all together

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## assignment

+++

* as a conclusion of this overview on CSS, 
* review your resume to create fancier layouts 
* and so it becomes responsive
  * it should display properly on a phone, tablet, and laptop
* hint : each section of course remains untouched no matter the device
  * but the arrangement of the sections on the page changes

+++ {"slideshow": {"slide_type": "slide"}}

## a sample cv

* here is one example
  * please do not try to mimick this example too closely,  
    it is just there so you can get a sense of what is possible; 
  * plus, it is far from perfect anyway ...
  * but make sure to open it in a separate window  
    and observe its responsive behaviour

```{code-cell}
---
hide_input: false
slideshow:
  slide_type: slide
---
tools.sample_from_stem("../samples/monarque/resume", {sources_show: false})
```

+++ {"slideshow": {"slide_type": "slide"}}

## where to find the example

* previous example can be found together with the course   
  in the git repo
  https://github.com/ue22-p21/web-intro

* specifically in the `samples/monarque` folder

* note that some of the other examples of the course  
  can be found in the `samples/` folder

+++ {"slideshow": {"slide_type": "slide"}}

## publishing

* once you're satisfied
* and provided that you have no problem  
  with your resumé being **publicly available**
* you can easily publish it on `github.io` (see next slide)
* plus tons of other opportunities around as well

+++ {"slideshow": {"slide_type": "slide"}}

### publishing on github.io

* this is simple and free
* only supports **public pages** though

assuming your github is `myid`
* create a repo on github `myid/myid.github.io`
* make it public
* your resume will be available at  
  `https://myid.github.io/`
* simply push changes to have them published

see <https://pages.github.com/> for details
