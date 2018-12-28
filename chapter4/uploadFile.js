var fs = require('fs')
var http = require('http')
var formidable = require('formidable');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    switch (req.method) {
      case 'POST':
        uploadFile(req, res)
        break
      case 'GET':
        showres(res)
        break
      default:
        badRequest(res)
        break
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

function showres(res) {
  var form =  `
    <form method="post" action="/"  enctype="multipart/form-data">
    <p><input type="text" name="sky"></p>
    <p><input type="text" name="sea"></p>
    <p><input type="file" name="file"></p>
    <p><input type="submit" value="upload"></p>
  `
  res.setHeader('content-type', 'text/html')
  res.setHeader('content-length', Buffer.byteLength(form))
  res.end(form)
}

function otherHeader(req) {
  var type = req.headers['content-type'] || ''
  return 0 === type.indexOf('multipart/form-data')
}

function uploadFile(req, res) {
  if (!otherHeader(req)) {
    return
  }
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, field, file) {
    console.log(field)
    console.log(file)
    res.end('complete')
  })
  // form.parse(req)
  // form.on('field', function (name, value) {
  //   console.log(name)
  //   console.log(value)
  // })
  // form.on('file', function (name, file) {
  //   console.log(name)
  //   console.log(file)
  // })
  // form.on('end', function () {
  //   res.end('upload complete')
  // })
}

server.listen(3000)
