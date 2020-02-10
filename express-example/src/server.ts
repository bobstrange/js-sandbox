import Express from 'express'
import bodyParser from 'body-parser'

const app = Express()

const logger = (request: Express.Request, response: Express.Response, next) => {
  console.log(`${request.method} ${request.path}`)
  next()
}
app.use(logger)
app.use(bodyParser.json())
app.get('/', (request, response) => {
  response.send('Hello')
})
app.post('/echo', (request, response) => {
  response.send(request.body)
})

app.listen(8080)
