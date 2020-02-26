import express, { Request, Response } from 'express'

const app = express()
app.get('/', (req: Request, res: Response) => {
  console.log('Hello')
  res.send('Hello')
})
app.listen(3000, () => {
  console.log(`Listening on port 3000`)
})
