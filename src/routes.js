
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

                try {

                    const newTask = {
                        id: randomUUID(),
                        title,
                        description,
                        completed_at: null,
                        created_at: Date(),
                        update_at: Date()
                    }

                    database.insert('tasks', newTask)
                    res.writeHead(201).end(JSON.stringify(database.select('tasks')))

                } catch (error) {
                    res.writeHead(404).end(String(error))
                }
            }
        },
        {
            method: 'PUT',
            path: buildUrlParams('/tasks/:id'),
            handleRoute: (req, res) => {
                const { id } = req.params
                const { title, description } = req.body

                try {

                    const data = {
                        id,
                        title,
                        description,
                        completed_at: null,
                        update_at: Date()
                    }

                    database.update('tasks', id, data)

                    res.end("Updated data")
                } catch (error) {
                    res.writeHead(404).end(String(error))
                }
            }
        },
        {
            method: 'DELETE',
            path: buildUrlParams('/tasks/:id'),
            handleRoute: (req, res) => {
                const { id } = req.params

                try {
                    const returnDeleted = database.delete('tasks', id)

                    if (returnDeleted.status === 'success') {
                        res.writeHead(204).end();
                    } else {
                        res.writeHead(404).end(String(returnDeleted.message))
                    }
                } catch (error) {
                    res.writeHead(404).end(String(error))
                }
            }
        },
        {
            method: 'PATCH',
            path: buildUrlParams('/tasks/:id/complete'),
            handleRoute: (req, res) => {
                const { id } = req.params
                const { completed_at } = req.body

                database.updateCompleted_at('tasks', id, completed_at)
                res.end('')
            }
        }

    ]