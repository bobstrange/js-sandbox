import 'reflect-metadata'
import express from 'express'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'

export const router = express.Router()

export function Controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
      const method = Reflect.getMetadata(MetadataKeys.method, target.prototype, key) as  Methods

      console.log('Controller target: ', target, ' key: ', key, ' prototype: ', target.prototype)

      console.log('path: ', path)
      console.log('method: ', method)

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}
