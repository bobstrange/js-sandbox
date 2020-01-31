// function greet(name?: string) {
//   return `Hello ${name.toUpperCase()}`; // ts(2532) Object possibly undefined
// }

function greet(name?: string) {
  if (name === undefined) return "Hello"; // name could be undefined
  return `Hello ${name.toUpperCase()}`;
}

/** index signature */
// type User = {
//   name: string
// }

// const user: User = {
//   name: 'John',
//   age: 30 // Error
// }

type User = {
  name: string
  [k: string]: any // index signature
}

const user: User = {
  name: 'John',
  age: 30
}
user.name // string
user.age // any

/** limit property type */

type Gender = 'male' | 'female'
type Level = 'fluent' | 'daily conversation' | 'poor'

type UserProfile = {
  name: string
  gender: Gender
  languages: {
    [k: string]: Level
  }
}

const john: UserProfile = {
  name: 'John',
  gender: 'male',
  languages: {
    english: 'daily conversation',
    japanese: 'fluent'
  }
}

john.languages.english // Level
john.languages.japanese // Level
john.languages.french // Level !?

type FixedUserProfile = {
  name: string
  gender: Gender
  languages: {
    [k: string]: Level | undefined
  }
}

const jane: FixedUserProfile = {
  name: 'Jane',
  gender: 'female',
  languages: {
    english: 'daily conversation',
    japanese: 'fluent'
  }
}
jane.languages.english // 'fluent' | 'daily conversation' | 'poor' | undefined

/** limit property name */
type Language = 'japanese' | 'english' | 'chinese'
type UserProfileWithLanguageRestricted = {
  name: string
  gender: Gender
  languages: {
    [k in Language]?: Level
  }
}

const mike: UserProfileWithLanguageRestricted = {
  name: 'mike',
  gender: 'male',
  languages: {
    english: 'daily conversation',
    japanese: 'fluent'
  }
}

mike.languages.english
mike.languages.chinese
// mike.languages.french // Error

/** suppress widening literal types */

const a = 'a' // a: 'a'
const b = a // b: string

const c = 'c' as const
const d = c // c: 'a'

function increment() {
  return { type: 'Increment' }
}

function decrement() {
  return { type: 'Decrement' } as const
}

const x = increment() // { type: string }
const y = decrement() // { readonly type: 'Decrement' }
