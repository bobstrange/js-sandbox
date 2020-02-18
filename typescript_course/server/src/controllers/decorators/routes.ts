import 'reflect-metadata'

export function Get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    console.log('Get ', 'path: ', path, ' target: ', target, ' key: ', key)

    Reflect.defineMetadata('path', path, target, key)
  }
}
