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

 const fiction: number = toNumber('1000') // We assume number is returnd but actual any
 fiction.toFixed // Error
