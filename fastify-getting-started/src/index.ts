import { server } from './server'

const port = Number(process.env.PORT || '8080')

const start = async () => {
  try {
    await server.listen(port)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()
