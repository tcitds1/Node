let a = []
Object.defineProperty(a, 1,  {
  enumerable: true,
  configurable: true,
  get() {
    return value
  },
  set(val) {
    value = val
    console.log('val', val)
  }
})
// a.key = 'yoyo'
// console.log(a.key)

// 无操作转发代理 c变动了 b也会变动
let b = {}
let c = new Proxy(b, {
  get (target, name) {
    return target['name'] ? target[name] : 'haha'
  },
  set (obj, key, value) {
    obj[key] = value + 1
  }
})
c.age = 13
