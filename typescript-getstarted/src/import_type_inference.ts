import { value, label, returnFalse } from './exportee'

/** ↓は型推論される */

const v1 = value
const v2 = label
const v3 = returnFalse()

/**
 * dynamic import
 */

 import('./exportee').then(module => {
   const amount = module.value
 })

 async function sample() {
   const { value } = await import('./exportee')
   const amount = value
 }
