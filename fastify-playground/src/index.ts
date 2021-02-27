import { server } from '~/server'
import { PORT } from '~/config/environments'

const start = async () => {
  try {
    await server.listen(PORT)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
  console.log(`server listening at ${PORT}`)
}

start()
