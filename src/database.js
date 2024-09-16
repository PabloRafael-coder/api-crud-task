import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)
export class Database {
    #database = {};
    constructor() {
        fs.readFile(databasePath, 'utf-8').then(data => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
        }
        )
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database));
    }

    select(table) {
        const data = this.#database[table] ?? [];

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist();
        return data;
    }

    update(table, id, data) {
        const returnIndexArray = this.#database[table].findIndex(row => row.id === id)

        if (returnIndexArray > -1) {
            const taskToUpdate = this.#database[table][returnIndexArray]
            this.#database[table][returnIndexArray] = { ...data, created_at: taskToUpdate.created_at }
        }
    }

    delete(table, id) {
        const returnIndexArray = this.#database[table].findIndex(row => row.id === id)
        console.log(returnIndexArray)

        if (returnIndexArray > -1) {
            this.#database[table].splice(returnIndexArray, 1)
            this.#persist()
            return { status: 'success', message: 'task deleted' }
        } else {
            return { status: 'error', message: 'task ID not found' }
        }
    }

    updateCompleted_at(table, id, completed) {
        const returnIndexArray = this.#database[table].findIndex(row => row.id === id)

        const data = this.#database[table][returnIndexArray]

        if (returnIndexArray > -1) {
            this.#database[table][returnIndexArray] = { ...data, completed_at: completed }
        }

    }
}