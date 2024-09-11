import fs from 'fs'
import { parse } from 'csv'

const filePathCsv = new URL('tasks.csv', import.meta.url)
const tasks = [];

const content = fs.createReadStream(filePathCsv, "utf-8")
    .pipe(parse({
        relax_column_count: true,
        skip_empty_lines: true,
        columns: true,
    }))

for await (const record of content) {
    tasks.push(record)
}

tasks.forEach((tasks) => {
    fetch("http://localhost:3333/tasks", {
        method: "POST",
        body: JSON.stringify({
            title: tasks.title,
            description: tasks.description
        })
    }).then().then(data => console.log(data))
})

