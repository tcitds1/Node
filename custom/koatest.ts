const fs = require('fs')
const Koa = require('koa')
const app = new Koa()
app.use(ctx => {
  if (ctx.path === '/good') {
    ctx.body = 'good job'
  }
  fs.readFile('some.txt', function (err, data) {
    try {
      if (err) throw err
      console.log(data)
      ctx.body = 'hello koa'
    } catch (e) {
      // 这里捕获不到readcallback抛出的异常
      console.log(e)
    } finally {
      console.log('离开 try catch')
    }
  })
})

// 捕获错误 不会造成接口崩溃
// process.on('uncaughtException', (err) => {
//   console.log(err)
// })

app.listen(3000)