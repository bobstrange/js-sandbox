import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'

// import express, { Request, Response, NextFunction } from "express"
import { createConnection } from "typeorm"

// import { User } from "./entity/User"
import { UsersController } from './users.controller'

createConnection().then(connection => {
  const app = createExpressServer({
    classTransformer: true,
    controllers: [UsersController]
  })
  app.listen(3000)
  // const userRepository = connection.getRepository(User)

  // const app = express()
  // app.use(express.json())
  // app.use(express.urlencoded({ extended: true }))

  // app.get('/users', async (req: Request, res: Response) => {
  //   const users = await userRepository.find()
  //   res.json(users)
  // })

  // app.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  //   const { id } = req.params
  //   const user = await userRepository.findOne(id)

  //   if (!user) {
  //     const err = new Error(`User id: ${id} not found`)
  //     return next(err)
  //   }
  //   return res.json(user)
  // })

  // app.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  //   const firstName = req.body.first_name
  //   const lastName = req.body.last_name
  //   const age = req.body.age

  //   if (!(firstName && lastName && age)) {
  //     const err = new Error('firstName, lastName and age is required')
  //     return next(err)
  //   }
  //   const user = await userRepository.create({ firstName, lastName, age })
  //   const results = await userRepository.save(user)
  //   console.log('user creation results: ', results)
  //   return res.send(results)
  // })

  // app.use((err, req, res, next) => {
  //   console.log(err.stack)
  //   res.status = err.statusCode || 500
  //   res.send({ error: err })
  // })
  // app.listen(3000)
})
