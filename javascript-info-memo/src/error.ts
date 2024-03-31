class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}

function test() {
  throw new ValidationError("error!")
}

try {
  test()
} catch (err) {
  console.log(`message: ${err.message}`)
  console.log(`name: ${err.name}`)
  console.log(`stack: ${err.stack}`)
}
