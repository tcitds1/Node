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
  this.resloveQue = []
  this.rejectQue = []
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'onFulfilled'
      self.value = value
      self.resloveQue.forEach(fn => {
        fn()
      })
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'onRejected'
      self.reson = reason
      self.rejectQue.forEach(fn => {
        fn()
      })
    }
  }
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
Promise1.prototype.then = function (onResolve, onReject) {
  let self = this
  if (this.status === 'pending') {
    this.resloveQue.push(function () {
      onResolve(self.value)
    })
    this.rejectQue.push(function () {
      onReject(self.reason)
    })
  }
  if (this.status === 'onFulfilled') {
    onResolve(this.value)
  }
  if (this.status === 'onRejected') {
    onReject(this.reson)
  }
}

let p1 = new Promise1((resolve, reject) => {
  setTimeout(() => {
    resolve('yamadi')
  }, 2000)
  console.log('hsha')
})
p1.then(result => {
  console.log(result)
})
