/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @version: 1.0
 */
let fs = require('fs')
let rs = fs.createReadStream(__dirname + '/proxyServer.js')
let datArr = []
let len = 0
rs.on('data', (chunk) => {
  datArr.push(chunk)
  len+=chunk.length
})
rs.on('end', () => {
  let data = Buffer.concat(datArr, len).toString()
  console.log(data)
})