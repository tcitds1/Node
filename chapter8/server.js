let express = require('express')
let formidable = require("formidable");
let fs = require('fs')
let app = express()

app.get('/', function (req, res) {
    res.end('hello world')
})

app.get('/start', function (req, res) {
    start(res)
})

app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, files) {
        fs.writeFileSync("public/test.png", fs.readFileSync(files.upload.path));
        res.redirect("/start") ;
    });
})

app.use('/public', express.static('public'))

const start = (res) => {
    fs.readFile('./start.html', function (err, data) {
        if (err) throw err
        res.writeHead(200, {'content-type': 'text/html'} )
        res.write(data)
        res.end()
    })
}

app.listen(3000, function () {
    console.log('server has runned on localhost:3000')
})
