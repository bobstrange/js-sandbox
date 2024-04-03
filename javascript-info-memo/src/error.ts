class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}

function parseUser(json) {
  const user = JSON.parse(json)

  if (!user.age) {
    throw new ValidationError("No field: age")
  }

  if (!user.name) {
    throw new ValidationError("No field: name")
  }

  return user
}

try {
  const user = parseUser('{ "age": 30 }')
} catch (err) {
  if (err instanceof ValidationError) {
    console.error(`Invalid data: ${err.message}`)
  } else if (err instanceof SyntaxError) {
    console.error(`Invalid data: ${err.message}`)
  } else {
    throw err
  }
}
