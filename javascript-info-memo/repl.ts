import repl from "node:repl"

repl.start({
  prompt: 'typescript >',
  input: process.stdin,
  output: process.stdout
})
