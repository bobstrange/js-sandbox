const expo = (value: number) => {
  return value ** 2
}

console.log(expo(2))
/**
 * Javascriptだと expo('1,000') -> NaN になってしまう
 * Typescriptで、コンパイルタイムでエラーに気づける
 */
console.log(expo('1,000'))

const taxed = (value: number): number => {
  return value * 1.1
}

const fee = (value: number): number => {
  return value * 1.4
}

/**
 * 戻り値の型 number と 実際にreturnされる型が違うので
 * コンパイルタイムでエラーに気付ける
 */
const price = (value: number): number => {
  return `${fee(value)}`
}
