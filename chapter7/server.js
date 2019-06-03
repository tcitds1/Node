var connect = require('connect')
var auth = require('basic-auth-connect')
var app = connect().use(auth(function (username, pass) {
    return username === 'kurisu1901' && pass === 'miniyukou'
})).use(hello).listen('3000')

function hello(req, res,) {
    res.end('helloworld')
}