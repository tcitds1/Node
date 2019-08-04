// 函数式编程
// 函数柯里化 传递给函数一部分参数调用它，返回一个函数来处理剩下的参数
let prop = (key: string) => {
  return (object: Object) => {
    return  object[key]
  }
}

let reduce = (fn: funcion, initValue) => (array) => {
  return array.reduce(fn, initValue)
}

let add = (x, y) => { return x + y}

let sum = reduce(add, 0)


console.log(prop('name')({name: 'kurisu'}))