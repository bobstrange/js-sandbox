type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

new API({
  baseURL: 'https://api.foo.bar',
  tier: 'dev'
})

// { baseURL: '...', tiier: 'dev' }は、OptionsのSubtypeである
// cacheSizeとtierはoptionalなので
// でも、↓の例はエラーがでる
// これが excess property checking
new API({
  baseURL: 'https://api.foo.bar',
  tiier: 'dev'
})

// どのような場合に excess property checking が行われるか?

/** 1. 引数に直接渡す場合 */

new API({
  baseURL: 'https://api.foo.bar',
  invalidTier: 'dev' // Error
})

/** 2. 渡している引数にTypeAssertionをしている場合 */

new API({
  baseURL: 'https://api.foo.bar',
  invalidTier: 'dev' // No error
} as Options)

/** 3. 引数を一旦変数に格納して、変数を引数に渡している場合場合 */

const invalidOptions = {
  baseURL: 'https://api.foo.bar',
  invalidTier: 'dev' // No error
}
new API(invalidOptions) // No error

/** 4. 引数を変数に格納する際に、変数の型を明示的に指定する場合 */
const invalidOptions2: Options = {
  baseURL: 'https://api.foo.bar',
  invalidTier: 'dev' // error
}
