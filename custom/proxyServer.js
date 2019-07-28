// 所有非/remote的请求都转发到remote了
const http = require('http')
const app = http.createServer((req, res) => {
	if (req.url === '/remote') {
		res.writeHead(200, {contentType: 'text/plain'})
		res.end('not proxy')
	} else {
		console.log(req.url)
		proxy(req, res)
	}
})

function proxy(req, res) {
	const options = {
		host: req.host,
		port: '3000',
		headers: req.headers,
		path: '/remote',
		agent: false, 
		method: 'GET'
	}
	let httpProxy = http.request(options, (response) => {
		response.pipe(res)
	})
	req.pipe(httpProxy)
}

app.listen(3000, function() {
	const PORT = app.address().port
	console.log('server running at http://localhost://127.0.0.1:3000')
})
