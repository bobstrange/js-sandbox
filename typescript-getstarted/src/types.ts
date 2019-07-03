/**
 * tuple
 */

let user: [string, number]
user = ['Bob', 20]  // OK
user = [24, 'Jane'] // Error

console.log(user[0].length) // OK
console.log(user[1].length) // Error

user[1] = 15       // OK
user[2] = 'Tokyo'  // Error
user[2] = true     // Error

/**
 * Unknown
 */

const numbers: number[] = ['0'] // Error
const anyNumbers: any[] = ['0'] // OK
const unknownNumbers: unknown[] = ['0'] // OK

numbers[0].toFixed(1) // OK
anyNumbers[0].toFixed(1) // OK
unknownNumbers[1].toFixed(1) // Error

/**
 * Union
 */

interface User {
  name: string
  age: number
  gender: string | null
}

let unionTypedUser: User

unionTypedUser = {
  name: 'Bob',
  age: 27
}

unionTypedUser['gender'] = 1 // error Type '1' is not assignable to type 'string | null'

/**
 * typeof
 */

let myObject = { foo: 'foo' }
let anotherObject: typeof myObject = { foo: '' }

anotherObject['foo'] = 'value'
anotherObject['bar'] = 'value'

/**
 * keyof
 */

let myObject2 = {
   foo: 'Foo',
   bar: 'Bar',
   baz: 'Baz'
 }


let myObjectKey: keyof typeof myObject2
myObjectKey = 'bar'  // myObjectKey: "foo" | "bar" | "baz"
myObjectKey = 'hoge' // Error
