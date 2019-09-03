Function.prototype._bind = function(context) {
  let self = this
  let arguments1 = Array.prototype.slice.call(arguments, 1)
  function Mid() {
  }
  function fn() {
    let arguments2 = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof Mid ? this : context, arguments1.concat(arguments2))
  }
  Mid.prototype = this.prototype
  fn.prototype = new Mid()
  return fn
}

function Person(name) {
  this.name = name || 'cat'
  this.age = '18'
}
Person.prototype.sayName = function () {
  console.log(this.name)
}

function factory() {
  let obj = new Object()
  let Construct = [].shift.call(arguments)
  obj.__proto__ = Construct.prototype
  Construct.apply(obj, arguments)
  return obj
}

let p = factory(Person, 'xg')
console.log(p.age)
p.sayName()