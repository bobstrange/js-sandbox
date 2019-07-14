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

class Creature {
  breathe() {}
}

class Animal extends Creature {
  snakeTail() {}
}

class Human extends Creature {
  greet() {}
}

function action(creature: Animal | Human | Creature) {
  creature.breathe() // OK
  if (creature instanceof Animal) {
    creature // (parameter) creature: Animal
    return creature.snakeTail()
  }
  if (creature instanceof Human) {
    creature // (parameter) creature: Human
    return creature.greet()
  }
  creature // (parameter) creature: Creature
  return creature.breathe()
}
