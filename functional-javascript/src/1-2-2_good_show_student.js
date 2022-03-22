import { runThree } from './run'
const find = curry((db, id) => {
  let obj = db.find(id)
  if (obj === null) {
    throw new Error('Object not found')
  }
  return obj
})

const csv = (student) => {
  return `${student.ssn},${student.firstname},${student.lastname}`
}

const append = curry((selector, info) => {
  document.querySelector(selector).innerHTML = info
})

const showStudent = runThree(
  append('#student-info'), // HTML 要素 ID を設定
  csv,
  find(db) // データアクセス用オブジェクトを設定
)
