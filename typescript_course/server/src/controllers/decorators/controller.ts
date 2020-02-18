import 'reflect-metadata'
import express, { Request, Response, RequestHandler, NextFunction } from 'express'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'

export const router = express.Router()

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request')
      return
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing key: ${key}`)
      }
    }
    next()
  }
}

export function Controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      )

      const method = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      ) as  Methods

      const middlewares = Reflect.getMetadata(
        MetadataKeys.middleware,
        target.prototype,
        key
      ) || []

      const requiredBodyProps = Reflect.getMetadata(
        MetadataKeys.validator,
        target.prototype,
        key
      ) || []

      const validator = bodyValidators(requiredBodyProps)

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        )
      }
    }
  }
}
