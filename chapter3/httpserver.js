var fs = require('fs')
var http = require('http')
var items =  []
http.createServer(function(req, res){
    switch(req.method){
        case 'POST':
            req.setEncoding('utf-8')
            var item = ''
            req.on('data', function (chunk) {
                item += chunk
            })
            req.on('end', function(data){
                items.push(item)
                console.log(items)
                res.end('ok')
            })
            break;
        case 'GET':
            console.log(items[0])
            items.forEach(function(item, i){
                res.write(i + ') ' + item + '\n');
            });
            res.end();
            break;
    }
}).listen(3000)
