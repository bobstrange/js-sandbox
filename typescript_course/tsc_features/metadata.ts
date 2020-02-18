import 'reflect-metadata'

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('Hi There')
  fly(): void {
    console.log('flying')
  }
}

function markFunction(secretInfo: string) {
  return function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}
