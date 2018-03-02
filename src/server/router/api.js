
import Router from 'koa-router';
import db from '../db';
import config from 'config';
import * as bitcoin from '../services/bitcoin'

const router = new Router({
    prefix: '/api',
});

// router.use(async (ctx, next) => {
//     await next();
// });

router.get('/block/:id', async ctx => {
    ctx.body = await bitcoin.block(ctx.params.id);
});

export default router;
