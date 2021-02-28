import fastify from 'fastify'

import QuerystringSchema from './schemas/querystring.schema.json'
import HeadersSchema from './schemas/headers.schema.json'

import { QuerystringSchema as QuerystringSchemaInterface } from './types/querystring.schema'
import { HeadersSchema as HeadersSchemaInterface } from './types/headers.schema'

const server = fastify()

server.get('/ping', async (req, res) => {
  return 'pong\n'
})

server.get<{
  Querystring: QuerystringSchemaInterface
  Headers: HeadersSchemaInterface
}>(
  '/example',
  {
    schema: {
      querystring: QuerystringSchema,
      headers: HeadersSchema,
    },
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
