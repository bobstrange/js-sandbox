const showStudent = (ssn) => {
  let student = db.find(ssn) // db パラメータはグローバルに変更されるので null とかになっている可能性もある
  if (student !== null) {
    document.querySelector(
      `${elementId}` // elementId もグローバルに変更されるので制御できない
    ).innerHTML = `${student.ssn},${student.firstname},${student.lastname}` // HTML 要素に直接変更を加えている
  } else {
    throw new Error('Student not found') // 例外を投げる可能性がある
  }
}

showStudent('444-44-4444')
