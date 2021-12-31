const koa = require('koa');
const app = new koa();

// router
const Router = require('koa-router');
const router = new Router();

// .env config file
require('dotenv').config;

router.get('/', (ctx, next) => {
    ctx.body = 'Hina Project';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
