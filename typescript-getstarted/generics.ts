interface Box<T> {
  value: T
}

const box0: Box = { value: "test" } // Error
const box1: Box<string> = { value: "test" }
const box2: Box<number> = { value: "test" } // Error

function boxed<T>(props: T) {
  return { value: props }
}

const boxed2 = <T>(props: T) => {
  return { value: props }
}

const boxA = boxed('test') // boxA: { value: string; }
const boxB = boxed(0)      // boxB: { value: number; }
const boxC = boxed(false)  // boxC: { value: boolean; }
const boxD = boxed(null)   // boxD: { value: any; }

const annotatedBoxA = boxed('test' as string | null)
const annotatedBoxC = boxed(false as boolean | null)

const boxed3 = <T extends number | string>(props: T) => {
  return { value: props }
}

const boxAA = boxed3('test')
const boxBB = boxed3(100)
const boxCC = boxed3(true) // Error

function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key]
}

const obj = {
  name: 'Taro',
  amount: 0,
  flag: false
}
pick(obj, 'name')
pick(obj, 'flag')
pick(obj, 'age') // Error


class Person<T extends string> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const person = new Person('Bob')
const personName = person.name // const personName: "Bob"

interface PersonProps {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}

class PersonWithProps<T extends PersonProps> {
  name: T['name']
  age: T['age']
  gender: T['gender']

  constructor(props: T) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
}

const personA = new PersonWithProps({
  name: 'Taro',
  age: 28,
  gender: 'male'
})
