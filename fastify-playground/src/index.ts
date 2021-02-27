import fastify from 'fastify'

import { server } from '~/server'
import { PORT } from '~/config/environments'

server.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`server listening at ${PORT}`)
})
