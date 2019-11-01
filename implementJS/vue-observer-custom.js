let Vue = (function Vue() {
  let uid = 0
  class Dep {
    constructor () {
      this.id = ++uid
      this.subs = []
    }
    depend () {
      Dep.target.addDep(this)
    }
    addSub (watcher) {
      this.subs.push(watcher)
    }
  }
  Dep.target = null

  class Observer {
    constructor(data) {
      Object.keys.forEach(key => {
        defineReactive(data, key)
      })
    }
  }
  function defineReactive(data, key) {
    let dep = new Dep()
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        if (Dep.target) {
          dep.depend()
        }
        return data[key]
      },
      set: () => {

      }
    })
  }
})
