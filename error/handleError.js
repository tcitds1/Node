/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
// 在全局监听 避免崩溃
process.on('uncaughtException', function (err) {
  console.log('uncaghtException', err)
})

const fs = require('fs')
fs.readFile(__dirname + '/handleError.js', function (err, data) {
  console.log('err', err)
  console.log(data.toString())
})