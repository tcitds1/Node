/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
// const net = require('net')
// const server = net.createServer((socket) => {
//   socket.end('再见\n');
// }).on('error', (err) => {
//   // 处理错误
//   throw err;
// });
//
// // 获取任意未使用的端口。
// server.listen(3000, '127.0.0.1', () => {
//   console.log('打开服务器', server.address());
// });
const fs = require('fs')
const os = require('os')
console.log(os.networkInterfaces())
// fs.writeFileSync(__dirname + '/1.txt', os.networkInterfaces().toString())