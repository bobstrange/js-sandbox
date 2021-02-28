import fastify from 'fastify'

const server = fastify()

server.get('/hello', async (req, res) => {
  return 'Hi there\n'
})

export { server }
