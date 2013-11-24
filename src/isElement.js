var type = require('type')
var isFn = (type(HTMLElement) === 'function')

module.exports = function (el) {
  if(isFn) return (el instanceof HTMLElement)
  return el && type(el) === 'object' && el !== null && el.nodeType === 1 && type(el.nodeName) === 'string'
}