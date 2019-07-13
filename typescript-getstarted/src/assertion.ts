/**
 * type assertion
 */

// Use <>

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// Use as

let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length

/**
 * const assertion
 */

const a = 'some'
let b = a
// b is inferred string

const c = 'other' as const
let d = c
// d is inferred other

function increment() {
  return { type: 'INCREMENT' }
}

function decrement() {
  return { type: 'DECREMENT' } as const
}

increment()
// inferred with
// function increment(): {
//   type: string;
// }

decrement()
// inferred with
// function decrement(): {
//   readonly type: "DECREMENT";
// }

export const CONST = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT'
} as const
