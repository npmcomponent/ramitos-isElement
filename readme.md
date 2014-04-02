*This repository is a mirror of the [component](http://component.io) module [ramitos/iselement](http://github.com/ramitos/iselement). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-iselement`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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