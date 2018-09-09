async function payloadWrapper(ctx, next) {
  await next()
  console.log(ctx.response.body)
  ctx.response.body = {
    status: 'success',
    payload: ctx.response.body
  }
}

module.exports = payloadWrapper
