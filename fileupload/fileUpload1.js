const fs = require('fs')
const http = require('http')
const util = require('util')
const html = fs.readFileSync(__dirname + '/index.html').toString()
const formidable = require('formidable')
const server = http.createServer((req, res) => {
  let body = ''
  res.writeHead(200, { 'content-type': 'text/html' })
  if (req.url === '/upload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    // req.on('data', (data) => {
    //   body += data
    // })
    // req.on('end', () => {
    //   // console.log(body)
    //   // 原生处理起来太麻烦了 先作罢
    //   res.end('upload finished')
    // })
  } else {
    res.end(html)
  }
})
server.listen(3000, () => {
  console.log('server has runed on localhost:3000')
})