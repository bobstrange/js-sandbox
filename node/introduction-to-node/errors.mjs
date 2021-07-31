import { readFile } from 'fs/promises'

process.on('uncaughtException', (err) => {
  console.error(err)
})

const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
console.log('Hello')
