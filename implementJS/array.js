let arrayProto = Array.prototype
export let arrayMethod = Object.create(arrayProto)
let keys = [
  'push', 'pop', 'shift', 'unshift', 'slice', 'splice'
]
keys.forEach(key => {
  Object.defineProperty(arrayMethod, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function (...argus) {
      arrayProto[key].call(this, ...argus)
      this.__ob__.dep.notify()
    }
  })
})