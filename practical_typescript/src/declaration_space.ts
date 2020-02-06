
{
  /** value */
  const value = 'test'  // Duplicated identifier error
  let value = 'test2'   // Duplicated identifier error
  function greet() {}   // Duplicated identifier error
  const greet = 'hello' // Duplicated identifier error
}

{
  /** type */
  // No problem
  interface User { name: string }
  interface User { age: number }
  const user: User = { name: 'Taro', age: 18 }
}

{
  /** type */
  // Error
  interface User { name: string }
  type User = { age4: number }
}

/** Namespace */
interface Test {
  value: string
}

namespace Test {
  export interface Props {
    name: string
  }
}

const test: Test = {
  value: 'test'
}

const props: Test.Props = {
  name: 'Taro'
}

/** Namespace */
namespace Publisher {
  export const name = 'foo'
  interface Appearance {
    color: 'monochrome' | 'fullcolors'
  }
  export interface Book {
    title: string
    appearance: Appearance
  }
}

namespace Publisher {
  export interface CookingBook extends Book { // can refer Book as it is exported
    category: 'cooking'
    // appearance: Appearance // Error as it is not exported
  }
}

namespace Publisher {
  export interface Book {
    lang: 'ja'
  }

  export interface TravelBook extends Book {
    category: 'travel'
  }
}

const cookingBook: Publisher.CookingBook = {} as Publisher.CookingBook
/**
 * cookingBook: { title: string, appearance: Appearance, lang: 'ja', category: 'cooking' }
 */
const travelBook: Publisher.TravelBook = {} as Publisher.TravelBook
/**
 * travelBook: { title: string, appearance: Appearance, lang: 'ja', category: 'travel' }
 */
