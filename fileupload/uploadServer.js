const fs = require('fs')
const http = require('http')
const html = fs.readFileSync('./index.html').toString()
const server = http.createServer((req, res) => {
  let body = ''
  res.writeHead(200, { 'content-type': 'text/html' })
  if (req.url === '/upload') {
    req.on('data', (data) => {
      body += data
    })
    req.on('end', () => {
      // console.log(body)
      // 原生处理起来太麻烦了 先作罢
      res.end('upload finished')
    })
  } else {
    res.end(html)
  }
})
server.listen(3000, () => {
  console.log('server has runed on localhost:3000')
})