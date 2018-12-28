var fs = require('fs')
var http = require('http')
var qs = require('querystring')
var items = []

var server = http.createServer(function (req, res) {
  // console.log(req.url)
  if (req.url === '/') {
    switch (req.method) {
      case 'POST':
        var body = ''
        req.setEncoding('utf8')
        req.on('data', function (chunk) {
          body += chunk
        })
        req.on('end', function () {
          items.push(qs.parse(body).item)
          show(res)
        })
        break
      case 'GET':
        show(res)
        break
      default:
        badRequest(res)
    }
  } else {
    notFound(res)
  }
})

function badRequest(res) {
  res.statusCode = 500
  res.setHeader('content-type', 'text/plain')
  res.end('nonono')
}

function notFound(res) {
  res.statusCode = 404
  res.setHeader('content-type', 'text/plain')
  res.end('404 not found')
}

function show(res) {
  var html = '<html><head><title>Todo List</title></head><body>'
    + '<h1>Todo List</h1>'
    + '<ul>'
    + items.map(function(item){
      return '<li>' + item + '</li>'
    }).join('')
    + '</ul>'
    + '<form method="post" action="/">'
    + '<p><input type="text" name="item" /></p>'
    + '<p><input type="submit" value="Add Item" /></p>'
    + '</form></body></html>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

server.listen(3000)