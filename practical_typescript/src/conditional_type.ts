function greet(name: string, age: number) {
  return `Hello I'm ${name}. ${age} years old.`
}

type Arg1<T> = T extends (...arg: [infer U, ...any[]]) => any ? U : never
type Arg2<T> = T extends (...arg: [any, infer U, ...any[]]) => any ? U : never
type Args<T> = T extends (...arg: infer U) => any ? U : never

type A = Arg1<typeof greet> // type A = string
type B = Arg2<typeof greet> // type B = number
type C = Args<typeof greet> // type C = [string, number]
