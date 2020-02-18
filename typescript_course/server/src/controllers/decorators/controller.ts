import 'reflect-metadata'
import express from 'express'

export const router = express.Router()

export function Controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata('path', target.prototype, key)
      const method = Reflect.getMetadata('method', target.prototype, key)

      console.log('Controller target: ', target, ' key: ', key, ' prototype: ', target.prototype)

      console.log('path: ', path)
      console.log('method: ', method)
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}
