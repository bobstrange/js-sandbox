type State = {
  readonly id: number
  name: string
}

const state: State = {
  id: 1,
  name: 'Active'
}

state.name = 'Paused'
state.id = 2 // Cannot assign to 'id' because it is a read-only property.ts(2540)

/**
 * Readonly type:
 */
type Address = {
  id: number
  city: string
}
const address1: Readonly<Address> = {
  id: 1,
  city: 'Tokyo'
}
address1.id = 2
address1.city = 'Chiba'

/**
 * freeze
 */

type Book = {
  id: number
  name: string
}

const book: Book = {
  id: 1,
  name: '実践Typescript'
}
book.id = 2
book.name = '他の本'

const frozenBook = Object.freeze(book)

frozenBook.id = 3 // Error
frozenBook.name = 'さらに他の本' // Error
