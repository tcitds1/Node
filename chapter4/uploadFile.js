var fs = require('fs')
var http = require('http')
var formidable = require('formidable');
var path = require('path')

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
  form.uploadDir = __dirname
  form.parse(req)
  form.on('file', function(field, file) {
    //rename the incoming file to the file's name
    fs.rename(file.path, form.uploadDir + "/" + file.name, function (err) {
      res.end('okokok')
    });
  });
  form.on('progress', function (bytesReceived, bytesExpected) {
    console.log('has received ' + Math.floor(bytesReceived / bytesExpected * 100))
  })
}

server.listen(3000)
