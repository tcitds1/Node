#### 很多api过期了，包括
`mime.lookup` 替换成 `mime.getType`

`io.sockets.manager.rooms` => `io.sockets.adapter.rooms`

`io.sockets.clients(room).length`
替换成
`io.of('/').in(room).clients(function(error,clients){
    var numClients=clients.length;
});`

#### 发现每个用户进去都会有一个默认对应的随机room，没有仔细研究api，因为随机room的长度很长，加了个长度条件过滤掉了，总算是让它跑起来了。