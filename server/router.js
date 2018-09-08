const Router = require('koa-router')
const request = require('request')
const config = require('./config/config')

const router = new Router()

router.get('/realtime', (ctx, next) => {
  const { query } = ctx
  ctx.response.body = request(`https://api.caiyunapp.com/v2/${config.caiyunToken}/${query.lng},${query.lat}/realtime.json`)
})

router.get('/forecast', (ctx, next) => {
  const { query } = ctx
  ctx.response.body = request(`https://api.caiyunapp.com/v2/${config.caiyunToken}/${query.lng},${query.lat}/forecast.json`)
})


module.exports = router
