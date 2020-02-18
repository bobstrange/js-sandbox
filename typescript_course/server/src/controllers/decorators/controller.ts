import 'reflect-metadata'
import express from 'express'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'

export const router = express.Router()

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

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler)
      }
    }
  }
}
