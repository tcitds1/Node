function memory(fn) {
  let cache = {}
  return  function () {
    let key = arguments.length + Array.prototype.join.call(arguments, ',')
    console.log(key)
    console.log(cache)
    if (key in cache) {
      return cache[key]
    } else {
      return cache[key] = fn.call(this, ...arguments)
    }
  }
}

function memory1(fn, hash) {
  let cache = {}
  let tn = function (key) {
    let address = hash ? hash.apply(this, arguments) : (key+'')
    if (!cache[address]) {
      console.log(address)
      cache[address] = fn.apply(this, arguments)
    }
    return cache[address]
  }
  return tn
}


// -----------------feibonaqieshu
let count = 0;
let feibo = function(n) {
  count ++
  return n<2 ? n : feibo(n - 1) + feibo(n - 2)
}
feibo = memory1(feibo)
for (let i = 1; i<=10; i++) {
  feibo(i)
  // feibo(i)
}
console.log(count)

