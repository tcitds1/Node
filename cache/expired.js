let http = require('http')
let fs = require('fs')
let date = Date.now()
const app = http.createServer((req, res) => {
  let text = fs.readFileSync(__dirname + '/img_cache.html').toString('utf8')
  res.writeHead(200, {
    'content-type': 'text/html',
    'expires': (new Date(date + 20000).toUTCString())
  })
  res.end(text)
})
app.listen('3000', function () {
  console.log('server has runned')
})