var net = require('net')
var event = require('events')
var channel = new event.EventEmitter()
channel.clients = {}
channel.subscriptions = {}
channel.on('join', function (id, client) {
  this.clients[id] = client
  this.subscriptions[id] = function (senderId, msg) {
    if (id !== senderId) {
      this.clients[id].write(msg)
    }
  }
  this.on('broadcast', this.subscriptions[id])
})
var server = net.createServer(function (client) {
  var id = client.remoteAddress + ':' + client.remotePort
  client.on('connect', function () {
    channel.emit('join', id, client)
  })
  client.on('data', function (data) {
    var data = data.toString()
    channel.emit('broadcast', id, data)
  })
})
server.listen(8888)