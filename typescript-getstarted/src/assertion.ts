/**
 * type assertion
 */

// Use <>

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// Use as

let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length
