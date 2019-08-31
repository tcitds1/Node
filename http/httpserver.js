// var http = require('http');
// var fs = require('fs')
// var server = http.createServer(function(req, res){
//   const html = fs.readFileSync('./index.html').toString('utf8')
//   res.writeHead(200, {'content-type': 'text/html'})
//   res.end(html)
// });
// server.listen(3000);

var https = require('https');

https.get('https://www.baidu.com', function(res){
  console.log('status code: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function(data){
    process.stdout.write(data);
  });
}).on('error', function(err){
  console.error(err);
});

// var client = http.get('http://127.0.0.1:3000', function(res){
//   console.log('1、http版本：' + res.httpVersion);
//   console.log('2、返回状态码：' + res.statusCode);
//   console.log('3、返回状态描述信息：' + res.statusMessage);
//   console.log('4、返回正文：');
//   // console.log(res)
//   res.pipe(process.stdout); // 把返回内容输入到显示中
// });
