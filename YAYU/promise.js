/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
let p = new Promise((resolve, reject) => {
})

function Promise1(fn) {
  let self = this
  self.reason = undefined
  self.value = undefined
  self.status = 'pending'
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'onFulfilled'
      self.value = value
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'onRejected'
      self.reson = reason
    }
  }
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
Promise1.prototype.then = function (onResolve, onReject) {
  if (this.status === 'onFulfilled') {
    onResolve(this.value)
  }
  if (this.status === 'onRejected') {
    onReject(this.reson)
  }
}

let p1 = new Promise1((resolve, reject) => {
  let k;
  console.log(k.c)
  resolve('yamadi')
})
p1.then(result => {
  console.log(result)
}, error => {
  console.log(error)
})
