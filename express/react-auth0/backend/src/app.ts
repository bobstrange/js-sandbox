import express, { Request, Response } from 'express'

export const app = express()

app.use(express.json())

app.get('/', (req, res: Response) => {
  res.json({
    message: 'Hi',
  })
})
