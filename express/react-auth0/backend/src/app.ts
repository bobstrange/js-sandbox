import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { clientOrigins } from './config/env.dev'

export const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors({ origin: clientOrigins }))

app.get('/', (req, res: Response) => {
  res.json({
    message: 'Hi',
  })
})
