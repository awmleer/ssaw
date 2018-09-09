const Router = require('koa-router')
const rp = require('request-promise')
const config = require('./config/config')

const router = new Router()

router.get('/realtime', async (ctx, next) => {
  const { query } = ctx
  ctx.response.body = JSON.parse(
    await rp(`https://api.caiyunapp.com/v2/${config.caiyunToken}/${query.lng},${query.lat}/realtime.json`)
  )
})

router.get('/forecast', async (ctx, next) => {
  const { query } = ctx
  ctx.response.body = JSON.parse(
    await rp(`https://api.caiyunapp.com/v2/${config.caiyunToken}/${query.lng},${query.lat}/forecast.json`)
  )
})


module.exports = router
