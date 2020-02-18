import 'reflect-metadata'

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      console.log('method:', method, ' path: ', path, ' target: ', target, ' key: ', key)

      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }

}

export const Get = routeBinder('get')
export const Put = routeBinder('put')
export const Post = routeBinder('post')
export const Delete = routeBinder('delete')
