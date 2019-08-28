/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
const zlib = require('zlib')
const fs = require('fs')
const http = require('http')


const server = http.createServer((req, res) => {
  let acceptEncoding = req.headers['accept-encoding']
  const path = __dirname + '/index.html'
  fs.createReadStream(path).pipe(res);
  return
  if (acceptEncoding.indexOf('gzip') !== -1) {
    let gzip = zlib.createGzip()
    res.writeHead(200, {'content-encoding': 'gzip'})
    fs.createReadStream(path).pipe(gzip).pipe(res)
  } else {
    fs.createReadStream(path).pipe(res);
  }
})

server.listen(3000)