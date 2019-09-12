let add = function ( x, y ) {
  console.log( x + y )
}

let subtra = function ( x, y ) {
  console.log( x - y );
}

Function.prototype.before = function () {
  let first = arguments[0]
  let self = this
  return function () {
    first.apply(this, arguments)
    self.apply(this, arguments)
  }
}
let tn = add.before(subtra);
tn(1, 2)
