import 'reflect-metadata'

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('height', 100, plane)

console.log(plane) // { color: 'red' } !!! note and height are invisible

const note = Reflect.getMetadata('note', plane)
const height = Reflect.getMetadata('height', plane)

console.log(note)
console.log(height)
