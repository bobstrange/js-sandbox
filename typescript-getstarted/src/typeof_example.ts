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

type Person = { gender: string; [k: string]: any }
type PersonA = Person & { name: string }
type PersonB = Person & { age: number }

function isPersonA(person: PersonA | PersonB): person is PersonA {
  return person.name !== undefined
}

function isPersonB(person: PersonA | PersonB): person is PersonB {
  return person.age !== undefined
}

function getPersonType(person: any) {
  if (isPersonA(person)) {
    person // (parameter) person: PersonA
    return 'A'
  }
  if (isPersonB(person)) {
    person // (parameter) person: PersonB
    return 'B'
  }
  return 'unknown'
}

type People = { name: string }
type PeopleA = People & { gender: 'male' | 'female' | 'other' }
type PeopleB = People & { graduate: string }
const peoples: (PeopleA | PeopleB)[] = [
  { name: 'Taro', gender: 'male' },
  { name: 'Hanako', graduate: 'Tokyo' }
]

const filteredPeoples = peoples.filter(people => 'graduate' in people)
filteredPeoples // const filteredPeoples: (PeopleA | PeopleB)[]

function filterPeople(people: PeopleA | PeopleB): people is PeopleB {
  return 'graduate' in people
}
const filteredPeoples2 = peoples.filter(filterPeople)
filteredPeoples2 // const filteredPeoples2: PeopleB[]

const filteredPeoples3 = peoples.filter((people: PeopleA | PeopleB): people is PeopleB => {
  return 'graduate' in people
})
filteredPeoples3 // const filteredPeoples3: PeopleB[]

