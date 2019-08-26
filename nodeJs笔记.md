#### Node.js 学习笔记

```javascript
var util = require('util')
util.inherit(childClass，parentsClass) // 等价于childClass.prototype = new parentsClss()
fs.watchFile(dir, function(err){})  // fs有监测文件夹下文件的方法
```

keep-alive 这样做，连接就不会中断，而是保持连接。当客户端发送另一个请求时，它会使用同一个连接。这一直继续到客户端或服务器端认为会话已经结束，其中一方中断连接。



```
let tableScrollY = (max) => {
  let rect = this.tableRef.current.getBoundingClientRect();
  let y = document.body.clientHeight - rect.top - 120;
  y = Math.max(y, 216);
  this.setState((preState) => {
    return {
      scroll: Object.assign({}, preState.scroll, {y: y})
    }
  })
}
window.addEventListener('resize', debounce(() => { tableScrollY() }, 300))
tableScrollY()
```

##### console.assert(value, [, ...message])

> 当value为非真值时才输出message

##### console.count([label])

维护一个特定于 `label` 的内部计数器，并将用给定 `label` 调用 `console.count()` 的次数输出到 `stdout`。

##### console.countReset([label])

重置特定于 `label` 的内部计数器。

##### console.table(tabularData[, properties])

尝试使用 `tabularData`（或使用 `properties`）的属性列和 `tabularData` 的行来构造一个表并记录它。 如果无

法将其解析为表格，则回退到仅记录参数

#### crypto

> 1.对称加密
>
> 加密、解密所用的秘钥是相同的，即encryptKey === decryptKey。
>  常见的对称加密算法：DES、3DES、AES、Blowfish、RC5、IDEA。

> 2、非对称加密
>
> 又称公开秘钥加密。加密、解密所用的秘钥是不同的，即encryptKey !== decryptKey。
>  加密秘钥公开，称为公钥。解密秘钥保密，称为秘钥。
>  常见的非对称加密算法：RSA、DSA、ElGamal。

```javascript
let crypto = require('crypto')
const secret = 'abcde'
let hash = crypto.createHmac('sha256', secret).update('i love node js').digest('hex')
console.log(hash)
```

### socket

```javascript
// 服务器
const dgram = require('dgram')
const server = dgram.createSocket('udp4')
server.on('connect', function () {
  console.log('已经连接')
})

server.on('error', (err) => {
  console.log(`服务器异常：\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${msg}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.bind(41234);
// 客户端
/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
const dgram = require('dgram');
const message = Buffer.from('一些字节');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
  client.close();
});
```

#### error

Node.js 应用程序一般会遇到以下四类错误：

- 标准的 JavaScript 错误，
- 由底层操作系触发的系统错误，例如试图打开不存在的文件、或试图使用已关闭的 socket 发送数据。
- 由应用程序代码触发的用户自定义的错误。
- `AssertionError` 错误，当 Node.js 检测到不应该发生的异常逻辑时触发。这类错误通常来自 `assert` 模块。

所有由 Node.js 引起的 JavaScript 错误与系统错误都继承自或实例化自标准的 JavaScript [](http://nodejs.cn/s/qZ873x) 类，且保证至少提供类中的属性。

- 大多数的异步方法都接受一个 `callback` 函数，该函数会接受一个 `Error` 对象传入作为第一个参数。 如果第一个参数不是 `null` 而是一个 `Error` 实例，则说明发生了错误，应该进行处理。
- 当一个异步方法被一个 `EventEmitter` 对象调用时，错误会被分发到对象的 `'error'` 事件上。
- 对于所有的 `EventEmitter` 对象，如果没有提供一个 `'error'` 事件句柄，则错误会被抛出，并造成 Node.js 进程报告一个未处理的异常且随即崩溃，除非： 适当地使用 [`domain`](http://nodejs.cn/s/cnfQ9s) 模块或已经注册了一个 [`process.on('uncaughtException')`] 事件的句柄。



#### emitter

大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。

所有能触发事件的对象都是 `EventEmitter` 类的实例。 这些对象有一个 `eventEmitter.on()` 函数，用于将一个或多个函数绑定到命名事件上。 事件的命名通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性键。

默认情况下，每个事件可以注册最多 `10` 个监听器。 可以使用 [`emitter.setMaxListeners(n)`](http://nodejs.cn/s/VPJci1) 方法改变单个 `EventEmitter` 实例的限制。 可以使用 `EventEmitter.defaultMaxListeners` 属性改变所有 `EventEmitter` 实例的默认值。 如果此值不是一个正数，则抛出 `TypeError`。

#### fs

##### fs.watch

监测文件的变化

##### `fs.Stats` 对象提供有关文件的信息。