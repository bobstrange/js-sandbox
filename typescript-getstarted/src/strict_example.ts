/**
 * strictNullChecks
 */

interface User {
  name: string,
  age?: number
}

const users = [
  { name: 'Bob', age: 20 },
  { name: 'Jane', age: 15 },
  { name: 'Tim' }
]

users.forEach(user => {
  console.log(`${user.name}'s age is ${user.age.toString()}`) // error TS2532: Object is possibly 'undefined'.
})
