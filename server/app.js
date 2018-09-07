const Koa = require('koa');
const app = new Koa();

const request = require('request');

app.use(async ctx => {
  ctx.response.body = request('https://api.caiyunapp.com/v2/{token}/121.6544,25.1552/forecast.json');
});

app.listen(3000);
