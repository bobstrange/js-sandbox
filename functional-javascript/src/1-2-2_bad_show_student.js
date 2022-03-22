const showStudent = (ssn) => {
  let student = db.find(ssn)
  if (student !== null) {
    document.querySelector(
      `${elementId}`
    ).innerHTML = `${student.ssn},${student.firstname},${student.lastname}`
  } else {
    throw new Error('Student not found')
  }
}

showStudent('444-44-4444')
