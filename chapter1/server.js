var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHeader('200', {'content-type': 'text/plain'})
    res.end('hello world')

})
server.listen('8080')
console.log('http server runing at localhost:8080')
