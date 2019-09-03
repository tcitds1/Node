Function.prototype._bind = function (obj) {
  let self = this
  let argu1 = Array.prototype.slice.call(arguments, 1)
  function Mid() {
  }
  function Fn() {
    let argu2 = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof Mid ? this : obj, argu1.concat(argu2))
  }
  Mid.prototype = self.prototype
  Fn.prototype = new Mid()
  return Fn
}

// function fn(age, address) {
//   console.log(this.name)
//   console.log(age)
//   console.log(address)
// }
// let fn1 = fn._bind(person, '19')
// let c = new fn1('nanjing')


// 第三版
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
}

var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');