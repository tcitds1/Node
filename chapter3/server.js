let fs = require('fs');
let http = require('http');
http.createServer(function (req, res) {
  if (req.url === '/') {
    console.log('hello')
    fs.readFile('./kataya.json', function (err1, jsonData) {
      if(jsonData) {
        console.log('读取到了')
        let arr = JSON.parse(jsonData.toString())
        fs.readFile('./template.html', function (err2, htmlData) {
          let html = htmlData.toString()
          html = html.replace('&', arr.join('</li><li>'))
          res.writeHead(200, {'content-type': 'text/html'})
          res.end(html)
        })
      }
    })
  }
}).listen(3000, '127.0.0.1')
