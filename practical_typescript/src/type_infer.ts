/** import type inference */
import { value, label, returnFalse } from './type_infer_import'

const v1 = value /* v1: 10 */
const v2 = label /* v2: "label" */
const v3 = returnFalse /* v3: () => boolean */

/** dynamic import type inference */
import('./type_infer_import').then((module => {
  const amount = module.value /* amount: 10 */
}))

const sample = async () => {
  const { value } = await import('./type_infer_import')
  const amount = value /* amount: 10 */
}

/** Json type inference */
import users from './sample.json'
type User = typeof users
/**
 * type User = {
 *   "id": number
 *   "created_at": string
 *   "profile": {
 *     "name": {
 *       "first": string
 *       "last": string
 *     }
 *   }
 *   "age": number
 *   "gender": string
 *   "enabled": boolean
 * }
 */
