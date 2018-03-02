
import WebSocket from 'ws';
import url from 'url';

export default (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws, req) {
        const location = url.parse(req.url || '', true);
        // You might use location.query.access_token to authenticate or share sessions
        // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
        console.log('connected');


        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        ws.send('something');
    });
};
