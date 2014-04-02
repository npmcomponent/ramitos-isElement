var type = require('component-type')
var isFn = (type(HTMLElement) === 'function')

module.exports = function (el) {
  if(isFn) return (el instanceof HTMLElement)
  return type(el) === 'element' && type(el.nodeName) === 'string'
}