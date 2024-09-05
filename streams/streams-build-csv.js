import fs from 'node:fs'
import { parse } from 'csv-parse'

const pathFileTasksCsv = new URL('tasks.csv', import.meta.url)

const tasks = []

const content = fs.createReadStream(pathFileTasksCsv).pipe(parse({
    columns: true,
    relax_column_count: true,
    skip_empty_lines: true
}))

for await (const record of content) {
    tasks.push(record)
}
