import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (req, res) => {
  return 'pong\n'
})

export { server }
