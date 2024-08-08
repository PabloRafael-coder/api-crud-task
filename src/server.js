import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res)

    const route = routes.find(index => index.method === method)

    if (route.method === method && route.path === url) {
        route.handleRoute(req, res)
    }
});

const port = 3333;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
