const eventEmitter = require('events')
const myEmitter = new eventEmitter()
myEmitter.on('chifan', function (data) {
  console.log('its time to have dinner')
  console.log(`吃${data}呢`)
})
myEmitter.emit('chifan', 'pi')

// myEmitter.emit('error', new Error('错误信息'));

// 只触发一次
let m = 0
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
// 不触发

myEmitter.on('error', function (e) {
  console.log(e)
})

myEmitter.emit('error', new Error('错误信息'));
// 抛出错误并使 Node.js 崩溃。