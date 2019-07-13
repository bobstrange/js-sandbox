function reset(value: number | string | boolean) {
  const v0 = value
  // inferred with const v0: string | number | boolean

  if (typeof value === 'number') {
    value // (parameter) value: number
    return value
  }
  value

  if (typeof value === 'string') {
    value // (parameter) value: string
    return value
  }

  value // (parameter) value: boolean
  return value
}

type User = { gender: string }
type UserA = User & { name: string }
type UserB = User & { age: number; gratitude: string }

function userType(user: UserA | UserB) {
  if ('gender' in user) {
    user // (parameter) user: UserA | UserB
  }

  if ('name' in user) {
    user // (parameter) user: UserA
    return
  }
  user // (parameter) user: UserB
  return
}
