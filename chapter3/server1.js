var fs = require('fs')
var http = require('http')
http.createServer(function (req, res) {
  getTitles(res)
}).listen(3000, 'localhost')

function getTitles(res) {
  fs.readFile('./kataya.json', function (err, data) {
    if (err) {
      handleErr(err, res)
    } else {
      let arr = JSON.parse(data.toString())
      getTemplate(arr, res)
      // let resData = formatHtml(arr, html)
      // sendMessage(res, resData)
    }
  })
}

function getTemplate(arr, res) {
  fs.readFile('./template.html', function (err, data) {
    if(err) {
      handleErr(err)
    } else {
      let str =  data.toString()
      formatHtml(arr, str, res)
    }
  })
}

function formatHtml(arr, str, res) {
  let resultString = str.replace('&', arr.join('</li><li>'))
  res.writeHead(200, {'content-type': 'text/html'})
  res.end(resultString)
}

function handleErr(err, res) {
  console.log(err)
  res.end('Server err')
}