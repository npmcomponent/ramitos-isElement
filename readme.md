# isElement

based on [Javascript isDOM — How do you check if a Javascript Object is a DOM Object?](http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object)

## install

```bash
component install ramitos/isElement
```

## api

```js
var isElement = require('isElement')
var domify = require('domify')

isElement(domify('<div></div>')) // => true
isElement(domify('something')) // => false
```