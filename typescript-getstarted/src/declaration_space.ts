/**
 * value
 */
let value = 'aaa'
let value = 'bbb'
function greet() { return 'Hello' }
const greet = 'Hello'

/**
 * type
 */

// OK
interface Country {
  name: string
}

interface Country {
  id: number
}

// Error
type Union = {
  name: string
}

type Union = {
  id: number
}
