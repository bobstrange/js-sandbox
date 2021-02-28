import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (req, res) => {
  return 'pong\n'
})

interface IQuerystring {
  name: string
  status: string
}

interface IHeaders {
  'h-Custom': string
}

server.get<{
  Querystring: IQuerystring
  Headers: IHeaders
}>(
  '/example',
  {
    preValidation: (request, reply, done) => {
      const { name, status } = request.query
      done(name !== 'admin' ? new Error('name must be admin') : undefined)
    },
  },
  async (request, reply) => {
    const { name, status } = request.query
    const customHeader = request.headers['h-Custom']

    console.log(name, status)
    console.log(customHeader)

    return 'Logged in !'
  }
)

export { server }
