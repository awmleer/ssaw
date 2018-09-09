const Koa = require('koa')
const app = new Koa()

const router = require('./router')
const payloadWrapper = require('./middleware/payload-wrapper')

app
  .use(payloadWrapper)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8000)
