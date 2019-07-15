interface Box<T> {
  value: T
}

const box0: Box = { value: "test" }
const box1: Box<string> = { value: "test" }
const box2: Box<number> = { value: "test" } //
