// 函数式编程
// 函数柯里化 传递给函数一部分参数调用它，返回一个函数来处理剩下的参数
let prop = (key: string) => {
  return (object: Object) => {
    return  object[key]
  }
}

let reduce = (fn, initValue) => (array) => {
  return array.reduce(fn, initValue)
}

let add = (x, y) => { return x + y}

let sum = reduce(add, 0)

// console.log(prop('name')({name: 'kurisu'}))

// bind的用法
let obja = {
  a: 'hello,world',
  fn: function () {
    console.log(this.a)
  }
}
let c = {
  a: 'hello cccc'
}
obja.fn()
obja.fn.bind(c)()
// obja.fn()