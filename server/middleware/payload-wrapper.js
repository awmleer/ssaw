async function payloadWrapper(ctx, next) {
  await next()
  ctx.response.body = {
    status: 'success',
    payload: ctx.response.body
  }
}

module.exports = payloadWrapper
