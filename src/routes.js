
import { Database } from './database.js';
import { randomUUID } from 'node:crypto'
import { buildUrlParams } from './utils/buildUrlParams.js';

const database = new Database()

export const routes =
    [
        {
            method: 'GET',
            path: buildUrlParams('/tasks'),
            handleRoute: (req, res) => {
                const user = database.select('tasks')
                return res.end(JSON.stringify(user))
            }
        },
        {
            method: 'POST',
            path: buildUrlParams('/tasks'),
            handleRoute: (req, res) => {
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
        },
        {
            method: 'PUT',
            path: buildUrlParams('/tasks/:id'),
            handleRoute: (req, res) => {
                const { id } = req.params
                const { title, description, completed_at, created_at, update_at } = req.body

                const data = {
                    id,
                    title,
                    description,
                    completed_at,
                    created_at,
                    update_at
                }

                database.update('tasks', id, data)

                res.end('')
            }
        },
        {
            method: 'DELETE',
            path: buildUrlParams('/tasks/:id'),
            handleRoute: (req, res) => {
                const { id } = req.params
                database.delete('tasks', id)

                res.end('')
            }
        },
    ]