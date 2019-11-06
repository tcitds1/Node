import { arrayMethod } from './array'
let uid = 0
class Dep {
  constructor() {
    this.id = ++ uid
    this.subs = []
  }
  depend () {
    Dep.target.addDep(this)
  }
  addSub (watcher) {
    this.subs.push(watcher)
  }
  notify () {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}

class Observer {
  constructor (data) {
    this.dep = new Dep()
    if (Array.isArray(data)) {
      data.__ob__ = this
      data.__proto__ = arrayMethod
    } else {
      this.walk(data)
    }
  }
  walk (data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    let child = observe(val)
    let dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get () {
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set (newVal) {
        val = newVal
        child = observe(newVal)
        dep.notify()
      }
    })
  }
}

function observe(data) {
  if (typeof data !== 'object') {
    return
  }
  return new Observer(data)
}

// watch干了什么事情呢
// 1. 接受data, key, cb
// 2. 调用get() get 触发
class Watcher {
  constructor (vm, param, cb) {
    this.vm = vm
    this.param = param
    this.cb = cb
    this.ids = {}
    this.val = this.get()
  }
  addDep(dep) {
    if (this.ids.hasOwnProperty(dep.id)) {
      return
    }
    dep.addSub(this)
    this.ids[dep.id] = dep
  }
  update () {
    console.log('update')
    this.run()
  }
  run () {
    let val = this.get()
    if (val !== this.val) {
      this.cb.call(this.vm, val)
    }
  }
  get () {
    Dep.target = this
    let val = this.vm._data[this.param]
    Dep.target = null
    return val
  }
}

class Vue {
  constructor(obj) {
    let data = (this._data = obj.data)
    observe(data)
    this.init()
  }
  $watch (key, cb) {
    new Watcher(this, key, cb)
  }
  init () {
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return this._data[key]
        },
        set (newVal) {
          this._data[key] = newVal
        }
      })
    })
  }
}

let demo = new Vue({
  data: {
    a: 4,
    b: 5
  }
})
demo.$watch('a', function (newVal) {
  console.log('new val is', newVal)
})
demo.a = 66