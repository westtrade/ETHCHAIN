import Koa from 'koa';
import mount from 'koa-mount';
import assets from 'koa-static';
import error from 'koa-json-error';
import ws from './ws';
import { createServer } from 'http';
import { resolve } from 'path';
import { createReadStream } from 'fs';
import APIRouter from './router/api';

const app = new Koa();
const server = createServer(app.callback());
ws(server);


app.use(assets(resolve('./build')));

app
  .use(APIRouter.routes())
  .use(APIRouter.allowedMethods());


function formatError(err) {
    return {
        status: err.status,
        message: err.message,
        success: false,
        reason: 'Unexpected'
    };
};

app.use(error(formatError));

app.use(async ctx => {
    ctx.type = 'html';
    ctx.body = createReadStream(resolve(__dirname, './index.html'));
});

const { PORT = 1337 } = process.env;
server.listen(PORT, () => {
    console.log(`Start http://127.0.0.1:${ PORT }/`);
});
