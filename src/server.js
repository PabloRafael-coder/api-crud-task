import http from 'node:http';
import database from './database.js';

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    if (method === 'POST' && url === '/tasks') {

        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }

        const body = Buffer.concat(buffers).toString()



    }
});

const port = 3333;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
