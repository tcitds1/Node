/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
function sum(x, y) {
  console.log('sum', module === require.main)
  return x + y
}
exports.sum = sum