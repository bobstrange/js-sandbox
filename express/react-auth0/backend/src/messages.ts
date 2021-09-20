import express from 'express'
import { checkJwt } from './middlewares/checkJwt'

export const messagesRouter = express.Router()

messagesRouter.get('/public-message', (req, res) => {
  res.status(200).json({ message: 'Public API Message' })
})

messagesRouter.get('/protected-message', checkJwt, (req, res) => {
  res.status(200).json({ message: 'Protected API Message' })
})
