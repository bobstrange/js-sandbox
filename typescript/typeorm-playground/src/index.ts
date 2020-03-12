import express, { Request, Response, NextFunction } from "express"
import { createConnection } from "typeorm"

import { User } from "./entity/User"

createConnection().then(connection => {
  const userRepository = connection.getRepository(User)

  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/users', async (req: Request, res: Response) => {
    const users = await userRepository.find()
    res.json(users)
  })

  app.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const user = await userRepository.findOne(id)

    if (!user) {
      const err = new Error(`User id: ${id} not found`)
      return next(err)
    }
    return res.json(user)
  })

  app.post('/users', (req: Request, res: Response) => {
    console.log('/users')
  })

  app.use((err, req, res, next) => {
    res.status = err.statusCode || 500
    res.send({ error: err })
  })
  app.listen(3000)
})
