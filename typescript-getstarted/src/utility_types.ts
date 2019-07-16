interface User {
  name: string
  age: number | null
  gender: 'male' | 'female' | 'other'
  birthplace?: string
}

/**
 * Readonly
 */

type ReadonlyUser = Readonly<User>
// type ReadonlyUser = {
//   readonly name: string;
//   readonly age: number;
//   readonly gender: "male" | "female" | "other";
//   readonly birthplace?: string;
// }

/**
 * Partial
 */

type PartialUser = Partial<User>
// type PartialUser = {
//   name?: string;
//   age?: number;
//   gender?: "male" | "female" | "other";
//   birthplace?: string;
// }

/**
 * Required
 */

type RequiredUser = Required<User>
// type RequiredUser = {
//   name: string;
//   age: number;
//   gender: "male" | "female" | "other";
//   birthplace: string;
// }

/**
 * Record
 */

type UserRecord = Record<'user', User>
// type UserRecord = {
//   user: User;
// }

/**
 * Pick
 */

type Gender = Pick<User, 'gender'>
// type Gender = {
//   gender: "male" | "female" | "other";
// }

/**
 * Omit
 */
type UserWithoutBirthplace = Omit<User, 'birthplace'>
// type UserWithoutBirthplace = {
//   name: string;
//   age: number;
//   gender: "male" | "female" | "other";
// }

/**
 * Exclude
 */

type True = Exclude<true | false, false>
// type True = true

type Value = Exclude<'a' | (() => {}), Function>
// type Value = "a"

/**
 * NonNullable
 */

type SomeType = NonNullable<string | null | undefined | number>
// type SomeType = string | number

/**
 * ReturnType
 */

const someFunc = () => { return 'test' }
type TestReturnType = ReturnType<typeof someFunc>
// type TestReturnType = string

type ErrorReturnType = ReturnType<string> // Error


