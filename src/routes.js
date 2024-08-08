
import { Database } from './database.js';
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes =
    [
        {
            method: 'GET',
            path: '/tasks',
            handleRoute: function (req, res) {
                const user = database.select('tasks')
                return res.end(JSON.stringify(user))
            }
        },
        {
            method: 'POST',
            path: '/tasks',
            handleRoute: function (req, res) {
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
            path: '/tasks:id',
            handleRoute: function (req, res) {

            }
        },
    ]