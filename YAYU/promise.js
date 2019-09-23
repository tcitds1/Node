/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
let p = new Promise((resolve, reject) => {
  console.log('haha')
})
function Promise1(fn) {
  fn()
}
Promise1.then = function (tn) {
  tn()
}
Promise1.catch = function (rn) {
  rn()
}

let c = new Promise1((resolve, reject) => {
  console.log('xxxx')
  resolve('x')
  reject('y')
})
