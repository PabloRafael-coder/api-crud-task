
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
                const { title, description } = req.body

                const newTask = {
                    id: randomUUID(),
                    title,
                    description,
                    completed_at: null,
                    created_at: Date(),
                    update_at: Date()
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
                const { title, description, created_at } = req.body

                const data = {
                    id,
                    title,
                    description,
                    completed_at: null,
                    created_at,
                    update_at: Date()
                }

                console.log(data.id)

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