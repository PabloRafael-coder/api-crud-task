import http from 'node:http';
import { randomUUID } from 'node:crypto'
import { Database } from './database.js';
import { json } from './middlewares/json.js';

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res)

    if (method === 'GET' && url === '/tasks') {
        const user = database.select('tasks')

        return res.end(JSON.stringify(user))
    }

    if (method === 'POST' && url === '/tasks') {

        const { title, description, completed_at, created_at, update_at } = req.body

        const newTask = {
            id: randomUUID(),
            title,
            description,
            completed_at,
            created_at,
            update_at
        }

        database.insert('tasks', newTask)

        res.end(JSON.stringify(database.select('tasks')))
    }
});

const port = 3333;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
