import express, { Request, Response } from "express"

const app = express()
app.use(express.json())

app.get('/users', (req: Request, res: Response) => {
  console.log('/users')
})

app.get('/users/:id', (req: Request, res: Response) => {
  console.log('/users')
})

app.post('/users', (req: Request, res: Response) => {
  console.log('/users')
})

app.listen(3000)
