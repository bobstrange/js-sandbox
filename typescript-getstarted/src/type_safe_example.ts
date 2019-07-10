/**
 * Nullable example
 */

function getFormattedValue(value: number | null) {
  return `${value.toFixed(1)} point` // Error
}

function fixedGetFormattedValue(value: number | null) {
  if (value == null) return '- point'
  // ここでは、 value は null になりえないので `(parameter) value: number` となっている
  return `${value.toFixed(1)} point`
}

/**
 * Optional argument
 */

function greet(name: string) {
  return `Hello ${name}`
}

 greet('Bob') // Hello Bob
 greet(1) // NG as 1 is not a string
 greet() // NG as greet requires a string argument

// Make an argument optional
function greet2(name?: string) {
  return `Hello ${name}`
}

greet2('Jane') // Hello Jane
greet2() // Hello undefined

function greet3(name?: string) {
  return `Hello ${name.toUpperCase()}` // Error `Object is possibly 'undefined'`
}

function greet4(name?: string) {

  if (name == null) return 'Hello'
  return `Hello ${name.toUpperCase()}`
}

greet4() // Hello
greet4('Mike') // Hello Mike


/**
 * Downcast example
 */
const defaultTheme = {
  backgroundColor: 'orange',
  borderColor: 'red'
}
/**
 * Inferred to
 * const defaultTheme: {
 *   backgroundColor: string;
 *   borderColor: string;
 * };
 */

 const defaultThemeWithDowncast = {
   backgroundColor: 'orange' as 'orange',
   borderColor: 'red' as 'red'
 }

 const invalidDowncast = {
   backgroundColor: 'orange' as number, // Error
   borderColor: 'red' as 'red'
 }

 /**
  * Upcast example
  */

 function toNumber(value: string): any {
   return value
 }

 const fiction: number = toNumber('1000') // We assume number is return but actual any
 fiction.toFixed // Error
