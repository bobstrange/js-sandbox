/**
 * Weak type
 */

type User = {
  name?: string
  age?: number
}

function registerUser(user: User) {}

const maybeUser = {
  name: 'Foo',
  age: 24,
  gender: 'male'
}

const notUser = {
  gender: 'male',
  place: 'Tokyo'
}

const maybeUser2 = {
  name: 'Bar',
  gender: 'male',
  place: 'Tokyo'
}


registerUser(maybeUser) // OK
registerUser(notUser) // Error
registerUser(maybeUser2) // OK
registerUser({}) // OK

/**
 * Excess property check
 */

registerUser(maybeUser) // No Error
registerUser({
  name: 'Foo',
  age: 24,
  gender: 'male'
}) // Error (Excess property check is working)

registerUser({...{
  name: 'Foo',
  age: 24,
  gender: 'male'
}}) // OK (Suppressed excess error check)
