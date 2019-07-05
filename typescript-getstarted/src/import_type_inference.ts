import { value, label, returnFalse } from './exportee'

/** ↓は型推論される */

const v1 = value
const v2 = label
const v3 = returnFalse()
