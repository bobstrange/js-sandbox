const test = 'Test -> var'

const func = async (arg) => {
  console.log(arg)
}

const testMap = new Map()

func('Hi')

const double = (n) => n * 2
const increment = (n) => n + 1

const result = 10
  |> double
  |> increment
  |> double
console.log(result)
