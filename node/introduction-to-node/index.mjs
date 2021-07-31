import { readFile, writeFile } from 'fs/promises'

console.log(import.meta.url)
let template = await readFile(
  new URL('template.html', import.meta.url),
  'utf-8'
)

const data = {
  title: 'Learn Node.js',
  body: 'This is a body'
}

console.log(template)

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

console.log(template)

await writeFile(new URL('index.html', import.meta.url), template)
