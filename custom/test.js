const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {contentType: 'text/plain'})
    res.end('hello')
}).listen(3000)
console.log('server running at 127.0.0.1:3000/')