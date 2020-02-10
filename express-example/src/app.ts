import Express from 'express'
import bodyParser from 'body-parser'

class App {
  public app: Express.Application
  public port: number

  constructor(controllers, port: number) {
    this.app = Express()
    this.port = port

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }

  public listen() {
    this.app.listen(
      this.port,
      () => {
        console.log(`Server is running on the port: ${this.port}`)
      }
    )
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json())
  }

  private initializeControllers(controllers) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router)
    })
  }
}

export default App
