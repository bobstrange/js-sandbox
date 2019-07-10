type User = {
  name: string
}

const user1: User = {
  name: 'Bob',
  age: 32 // Type '{ name: string; age: number; }' is not assignable to type 'User'.
}

/**
 * name は必須だが、それ以外のプロパティも設定したい場合
 */

type Tyre = {
  name: string
  [k: string]: any
}

const tyre1: Tyre = {
  name: 'Grandprix 4000',
  size: 25
}
tyre1.name // string
tyre1.size // any ...

type Tyre2 = {
  name: string // property 'name' of type 'string' is not assignable to string
  [k: string]: number
}

type Tyre3 = {
  name: string // OK
  [k: string]: number | string
}

const tyre3: Tyre3 = {
  name: "Yksion pro ust",
  size: 28
};

tyre3.name // string
tyre3.size // number | string
