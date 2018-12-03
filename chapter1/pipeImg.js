var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req, res){
    res.writeHeader('200', 'content-type':'image/png')
    fs.createReadStream('./vim.jpg').pipe(res)
})
server.listen('8080')
