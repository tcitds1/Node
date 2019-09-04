const EventEmitter = require('events').EventEmitter
const util = require('util')
util.inherits(Person, EventEmitter)
function Person() {
}
const c = new Person()
c.on('greet', function () {
  console.log('hello cat')
})
c.emit('greet')