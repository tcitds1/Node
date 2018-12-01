var fs = require('fs')
fs.readFile('./package.json', function(err, data){
    console.log(data)
})
//console.log('hello')
