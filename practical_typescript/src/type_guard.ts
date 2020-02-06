/** user defined type guards */
{
  type User = {
    gender: string
    [k: string]: any
  }
  type UserA = User & {
    name: string
  }
  type UserB = User & {
    age: number
  }

  const isUserA = (user: UserA | UserB): user is UserA => {
    return user.name !== undefined
  }

  const isUserB = (user: UserA | UserB): user is UserB => {
    return user.age !== undefined
  }

  const getUserType = (user: any) => {
    let u0 = user // any
    if (isUserA(user)) {
      let u1 = user // u1: UserA
      return 'UserA'
    }
    if (isUserB(user)) {
      let u2 = user // u2: UserB
      return 'UserB'
    }
    let u3 = user // u3: any
    return 'unknown'
  }
}

/** Array filter */

type Person = { name: string }
type PersonWithGender = Person & { gender: 'male' | 'female' | 'other' }
type PersonWithGraduate = Person & { graduate: string }

const people: (PersonWithGender|PersonWithGraduate)[] = [
  { name: 'Taro' , gender: 'male' },
  { name: 'Hanako', graduate: 'Tokyo' }
]

const filteredPeople = people.filter(people => 'graduate' in people)
/** Inferred as (PersonWithGender|PersonWithGraduate)[]  */

const filter = (people: PersonWithGender|PersonWithGraduate): people is PersonWithGraduate => {
  return 'graduate' in people
}

const filteredPeople2 = people.filter(filter)
/** Inferred as PersonWithGraduate[] */

