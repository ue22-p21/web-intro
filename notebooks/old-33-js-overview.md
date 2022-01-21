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
  title: 30,000 ft overview
rise:
  autolaunch: true
  slideNumber: c/t
  start_slideshow_at: selected
  theme: sky
  transition: cube
---

+++ {"slideshow": {"slide_type": "slide"}}

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

+++ {"slideshow": {"slide_type": ""}}

# 30,000 ft overview

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## Preamble

+++

* from now on, we will very briefly cover **some** features of the language
* for a more thorough study, refer to [this excellent tutorial on javascript.info](https://javascript.info/)
* we will point at a selection of fragments as we go
* students interested should probably read it through

+++ {"slideshow": {"slide_type": "slide"}}

## Various runtimes

+++

* FYI, JavaScript is not restricted to being used in a browser
* among others, the [`node.js` runtime](https://nodejs.org/en/about/)
  * e.g. to power a backend web server
  * or simply from a regular terminal


```bash
$ node
Welcome to Node.js v12.5.0.
Type ".help" for more information.
> console.log("hello world")
hello world
> process.exit()
```

+++ {"slideshow": {"slide_type": "slide"}}

## Syntax

+++

* The syntax is similar to C, C++ and Java
* Unlike Python, indentation does not matter
* It have some object
* `;` is expected at the end of each statement
* 2 styles of comments

```{code-cell}
:tags: [raises-exception]

// this is a comment, no need to close
// but must be repeated on each line

// you should end all statements with a ;
a = 10;

/* this is another one
   everything including newlines 
   is ignored until matching */
```

<span class="rise-footnote"> **NOTE** as we will see below, real code should **always** declare variables, so this would read `let a = 10;` instead, but let us keep it simple for now </span>

+++ {"slideshow": {"slide_type": "slide"}}

### tests and loops

+++

* `if` and `while` statements are similar to C
* `for` are a little more awkward - more on iterations as we go

```{code-cell}
:cell_style: split

// conditional if 
if (a == 10) {
    console.log("YES 10");
} else if (a == 12) {
    // 
} else {
    //
}
```

```{code-cell}
:cell_style: split

while (a >= 5) {
    console.log(a);
    a -= 3;
}
```

+++ {"slideshow": {"slide_type": "slide"}}

###   switch

+++ {"cell_style": "split"}

the switch statement in JavaScript
is similar to the ones in C++ and Java
it will branch your control flow into a
location that depends on the subject's value

**do not forget** the `break` statements !

```{code-cell}
:cell_style: split

switch (a) {
    case 0:
        console.log("ZERO");
        break;
    case 10:
        console.log("TEN");
        break;
    case 20:
        console.log("TWENTY");
        break;
    default:
        console.log("NONE");        
}
```

<p class="rise-footnote"> if the switch statement is new to you, please refer to this <a href="https://javascript.info/switch">full article on javascript.info</a></p>

+++ {"slideshow": {"slide_type": "slide"}}

### C-style `for` loop

+++

* C- or Java-like iteration loops are supported
* although seldom needed 
* more on that about container types (arrays, …)

```{code-cell}
for (let i=0; i<3; i++) {
    console.log(i);
}
```

+++ {"slideshow": {"slide_type": "slide"}}

## Variables ([link in tuto](https://javascript.info/variables))

+++ {"slideshow": {"slide_type": ""}}

* as usual, variables are **names** that refer to **data in memory**
* like in Python, any such data is **typed**
* core language has some **basic types**
* Variable should be declared using one of the keywords

```{code-cell}
:cell_style: split

let n = 10;
typeof(n)
```

```{code-cell}
:cell_style: split

let s = "hello world";
typeof(s)
```

<p class="rise-footnote"> use <code>const</code> instead of <code>let</code> when declaring a constant variable</p>

+++ {"slideshow": {"slide_type": "slide"}}

### Python-style assignment

```{code-cell}
// there is a form of parallel assignment 
// similar to what Python offers

let [py, thon] = [10, 20];

py + thon
```

+++ {"slideshow": {"slide_type": "slide"}}

## Variable scope 

+++

* like in all other languages
  * need to limit the scope of a variable
  * so that variable `x` in 2 distinct functions do not clash
* use **lexical nested scope**
  * a variable is visible only within its code block
* a very common strategy, like in Python, C++, Java, …

+++ {"slideshow": {"slide_type": "slide"}}

### scope illustrated

```{code-cell}
---
slideshow:
  slide_type: ''
tags: [raises-exception]
---
// this is a global variable
let a = "global";

function foo() {
    // this local declaration 
    // hides the global variable
    let a = "local";
    console.log("in foo():", a);
}

console.log("in global context:", a);
foo()
```

+++ {"slideshow": {"slide_type": "slide"}}

### declaring variables with `let`

+++

* you should **always** declare your variables with **`let`** 
  * even though (a lot of) legacy code does not
  * also note that older-school code may use `var` instead

* for new code, just **always** use `let`

+++

<p class="rise-footnote"> 
    when declaring a variable with <code>let</code>,
    it cannot be declared a second time within the same block; 
<br>
    in the context of notebooks, a drawback of this is
    that you cannot run a cell twice if 
    it uses a toplevel <code>let</code>
</p>

+++ {"slideshow": {"slide_type": "slide"}}

### Blocks are delimited by `{}`

+++

* the elementary unit for scope is the **block**
* which is materialized by `{}`

```{code-cell}
:tags: [raises-exception]

let y = "outermost";
{ 
    let y = "intermediate";
    { 
        let y = "innermost";
        console.log("level 2", y);
    }
    console.log("level 1", y);
}
console.log("level 0", y);
```

+++ {"slideshow": {"slide_type": "slide"}}

## globals

+++

* context (browser components mostly) is exposed to programer
* through a set of **global variables**, e.g.
  * `document` to access the DOM
  * `window`, remember `setTimeout()`
  * `console` like in `console.log()`
  * `this` - a tricky one
* may depend on the runtime  

+++

<p class="rise-footnote"> surprising as it may be, the notebook's JavaScript engine is an instance of <code>node</code>, and so is <b>not browser-related</b> <br> so we could not inspect the <code>document</code> or <code>window</code> variables in this context; of course you can do so from the browser's console though</p>

+++ {"slideshow": {"slide_type": "slide"}}

## Functions

+++

* like in other languages
* we have seen examples already

```{code-cell}
function foo(x, y) {
    console.log(x, '+', y, '=', x+y);
}

foo(10, 20)
```

+++ {"slideshow": {"slide_type": "slide"}}

### Duck typing

+++

like in Python:
* **objects** are typed
* but **variables** are not bound to a given type
* members variable of object can change over time

```{code-cell}
function foo(x, y) {
    console.log('x is a ', typeof(x));
    console.log(x, '+', y, '=', x+y);
}

// like in Python, function arguments
// are not statically typed
foo('abc', 'def')
```

+++ {"slideshow": {"slide_type": "slide"}}

### Loose binding

+++

* JavaScript is **very permissive**
* for example, number of args is not checked

```{code-cell}
function fuzzy(x, y, z) {
    console.log("x = ", x, " y = ", y, " z = ", z);
}
fuzzy(10)
fuzzy(10, 20)
fuzzy("abc", "def", "ghi")
```

+++ {"slideshow": {"slide_type": "slide"}}

### `this`

+++

* a very specific feature of JavaScript
* is that the implicit variable `this` is always defined
* the content of `this` depend on the context
* useful and relevant **only** for
  * methods (more on this later)
  * and some callbacks

```{code-cell}
function show_this() {
    console.log(typeof(this));
}

show_this()
```

+++ {"slideshow": {"slide_type": "slide"}}

## Classes

+++

as of ES6, the language has a proper `class` statement

_Note:_ old javascript does not have class and use other way to define objects. 

```{code-cell}
class Vector {
    // just like Python's __init__
    // NO NEED to pass 'self' in JavaScript
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // same for a regular method 
    display() {
        console.log(`[Vector x=${this.x} y=${this.y}]`)
    }
}

let vector = new Vector(10, 20)
vector.display()
```

<p class="rise-footnote"> here again, running this cell twice will cause an error; this is because, like with <code>let</code>, 
    <br>
    the language won't let you define the same <code>Vector</code> variable 
    twice in the same scope</p>

+++ {"slideshow": {"slide_type": "slide"}}

### Notes on classes

+++

**NOTICE** the following from that first class example :

* `constructor` is very much alike `__init__` in Python
* the **implicit** `this` variable refers to the current object 
* it is very much alike the traditional `self` argument in Python
* except that it is **not mentioned** as a method parameter
* objects get created with `new Vector()` - Java and C++ style
  * not just plain Python-style `Vector()` 

+++

<p class="rise-footnote"> 
    also notice the string-formatting syntax 
    <code>`text ${variable}`</code>
    similar to Python's f-strings,
    <br>
    except that an expression is inserted with <code>${expr}</code>, remember with f-strings it was just <code>{expr}</code>
</p>

+++ {"slideshow": {"slide_type": "slide"}}

### properties

+++

* modern JavaScript has a native notion of properties
* i.e. expose an apparently mundane access  
  to an instance attribute
* through **getter** and **setter** functions
* that intercept read/write attempts  
  on the attribute

+++ {"slideshow": {"slide_type": "slide"}}

### Property example

```{code-cell}
:cell_style: split

class Temperature {
    constructor(kelvin) {
        this.kelvin = kelvin; // Call "set kelvin(kelvin)"
    }
    
    get kelvin() {
        return this._kelvin;
    }

    set kelvin(kelvin) {
        if (kelvin < 0) {
            console.log("negative");
            return
        }
        this._kelvin = kelvin;
    }
}
```

```{code-cell}
:cell_style: split

let temp = new Temperature(10)
```

```{code-cell}
:cell_style: split

temp.kelvin = -10
```

```{code-cell}
:cell_style: split

temp
```

+++ {"slideshow": {"slide_type": "slide"}}

### Old-school classes

+++

* ES6 is relatively recent
* you may come across older-school code that uses other techniques
* typically involving a `prototype` thingy
* here again for new code you should stick to the new idiom

+++ {"slideshow": {"slide_type": "slide"}}

## `console.log()` function

+++

* a function to show output
* very similar to Python's `print()` function
  * of course from a browser it ends up in the devel tools area
  * but under `node` it will just print
* accepts any number of arguments

```{code-cell}
console.log(1, "two", [3, "four"])
```

+++ {"slideshow": {"slide_type": "slide"}}

### `console.log()` and objects

+++ {"slideshow": {"slide_type": ""}}

**TIP** about debugging JS objects :

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
// it may be tempting to write
console.log(`vector = ${vector}`)
```

```{code-cell}
---
cell_style: split
slideshow:
  slide_type: ''
---
// but it is better like this
console.log("vector = ", vector)
```

<p class="rise-footnote">
    Try it out within the browser's console :
    <br> try to run <code>log.console(document)</code> or any other JS object, 
    and see that you can navigate the inner structure of the object, 
    rather a flat representation that traditional languages have used us to.
</p>

+++ {"slideshow": {"slide_type": "slide"}}

## Exceptions

+++

* JavaScript supports exceptions, just like Python
* same bubbling mechanism
  * that scans the call stack 
  * until a catch statement is found

```{code-cell}
try {
    // referring to an unknown variable
    unknown;
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`);
}
```
