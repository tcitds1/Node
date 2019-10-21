/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
Promise.all = function (argus) {
  return new Promise((resolve, reject) => {
    let count = 0
    let results = []
    for (let i in argus) {
      Promise.resolve(argus[i]).then(result => {
        results[i] = result
        count ++
        if (count === argus.length) {
          resolve(results)
        }
      }).catch(e => {
        reject(e)
      })
    }
  })
}
// Promise.race = function (argus) {
//   return new Promise((resolve, reject))
// }

// Promise.finally = fu

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
