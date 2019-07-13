# Typescript get started

## 雛形を作る

```shell
tsc --init
```

## コンパイルする

```shell
tsc
```

## Strict mode のエラーを起こす

```shell
sample.ts:1:22 - error TS7006: Parameter 'arg' implicitly has an 'any' type.

1 export const test = (arg) => {
                       ~~~
```

`any`型を期待するパラメータは、明示的に`any`を指定する必要がある

## Change input and output dir

```json
{
    "compilerOptions": {
        "outDir": "dist"
    },
    "include": [
        "src/**/*"
    ]
}
```

## Output *.d.ts

```json
{
    "compilerOptions": {
        "declaration": true
    }
}
```

## Jsファイルをインポートしてビルドする

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "declaration": false
    }
}
```

### 注意
`declaration: false` が必要
> Option 'allowJs' cannot be specified with option 'declaration'.

`checkJs: true` の場合は、JSファイル側で型推論できるようにしておく必要がある。
(場合によっては、型情報をコメントする必要がある)

## tsconfigファイルを分割する

`tsconfig.json`が格納されているファイルパスを`-b` オプションで複数指定可能

```shell
tsc -b src test
# src/tsconfig.json と test/tsconfig.json を参照してビルド

tsc -b src/tsconfig.something.json
# tsconfig.json 出ない場合は、configファイルをフルパスで指定
```

## Unknown型

any型に比べると型安全

```ts
const sampleAny: any[] = [1, 2]
const sampleUnknown: unknown[] = [1, 2]

sampleAny[0].toUpperCase() // ランタイムでエラーになる toUpperCase is not a function
sampleUnknown[0].toUpperCase() // コンパイルタイムでエラーになる
```

## Union型
複数の型の可能性
Nullableもこれで表せる

```ts
interface User {
  name: string
  age: number
  gender: string | null
}
let user: User
user = {
  name: 'Bob',
  age: 20,
}
```

## 型クエリ
`typeof` キーワードで、変数の型を取得できる

```ts
let myObject = { foo: 'foo' }
let anotherObject: typeof myObject = { foo: '' }

anotherObject['foo'] = 'value'
anotherObject['bar'] = 'value' // Error { foo: string } には、barというプロパティが無い
```

`keyof` キーワードでオブジェクトのプロパティを取得できる
`typeof` と組み合わせて、変数の型を取得 => 型のプロパティを取得できる

```ts
let myObject2 = {
   foo: 'Foo',
   bar: 'Bar',
   baz: 'Baz'
}

let myObjectKey: keyof typeof myObject2
myObjectKey = 'bar'  // myObjectKey: "foo" | "bar" | "baz"
myObjectKey = 'hoge' // Error
```

## アサーション

```ts
// <> を使ったアサーション
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
```

```ts
// as を使ったアサーション
let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length
```

`<>`はJSXとの区別が曖昧になるので、JSXでアサーションを使用する場合は `as` を使う

## Enum

数値列挙と、文字列列挙の二種類がある

```ts
enum Direction {
  Up = 1, // 初期化しない場合は 0が入る
  Down,
  Left,
  Right
}

console.log(Direction.Up)  // 1
console.log(Direction.Right) // 4
```
```ts
enum Characters {
  BOB = 'Bob',
  TOM = 'Tom'
}
Characters.BOB
```

## Nullable型を使う

```ts
function getFormattedValue(value: number | null) {
  return `${value.toFixed(1)}` // Error
}
```

value は null である可能性があるので、コンパイルタイムでエラーになってくれる

```ts
function fixedGetFormattedValue(value: number | null) {
  if (value == null) return '- point'
  // ここでは、 value は null になりえないので `(parameter) value: number` となっている
  return `${value.toFixed(1)} point`
}
```

if による guard 節で、 非null が確定しているので、Compilerは if 以降では `value: number` と扱ってくれる

## Optionalな引数を使う

nullableと似ているが、optionalな引数は、 `undefined` 型が付加される

```ts
function optionalExample(value?: string) {
  // (parameter) value: string | undefined
  return value
}
```

よって、引数が非undefinedであることを確定されてから、引数の型に対する処理を書く必要がある

```ts
function toUpperCase(value?: string) {
  if (value == null) return ''
  return value.toUpperCase()
}
```

## Weak typeの型安全
すべてのプロパティがオプショナルな型 -> `Weak type`

```ts
type User = {
  age?: number,
  name?: string
}
```

基本的には、 `age` or `name` を持つオブジェクトであれば `User` 型であると判定される
```ts
function addUser(user: User) {}
const user1 = { age: 25 }
const user2 = { name: 'foo' }
const user3 = { age: 25, name: 'foo', other: 'aaa' }
const invalidUser = { other: 'bbb' }

addUser(user1)
addUser(user2)
addUser(user3)
addUser(user4) // このときだけError
```

ただし、関数の引数に `User` 型を要求されている際に、直接 オブジェクトリテラルを使用する際には、
プロパティを厳しくチェックする(`Excess Property Checks`)

```ts
addUser({ age: 25, name: 'Bob', other: 'aaa' }) // Error
```

## Readonly
readonly property

```ts
type State = {
  readonly id: number
  name: string
}

const state: State = {
  id:   1,
  name: 'Active'
}

state.name = 'Paused'
state.id = 2
```

readonly type

```ts
type Address = {
  id: number
  city: string
}
const address1: Readonly<Address> = {
  id: 1,
  city: 'Tokyo'
}
address1.id = 2
address1.city = 'Chiba'
```

## アップキャスト・ダウンキャスト
### ダウンキャスト
```ts
const defaultTheme = {
  backgroundColor: 'orange',
  borderColor: 'red'
}
/**
 * Inferred to
 * const defaultTheme: {
 *   backgroundColor: string;
 *   borderColor: string;
 * };
 */
```

`defaultTheme` は オブジェクトで、プロパティに再代入可能なため、 プロパティは、`string` と推論される.
Typescriptより、プログラマーのほうが型について詳しいので、アサーションで型宣言をする。

```ts
 const defaultThemeWithDowncast = {
   backgroundColor: 'orange' as 'orange',
   borderColor: 'red' as 'red'
 }
```

抽象的な型(この場合`string`)から、具体的な型 (この場合 `orange` `red` など)を付与することをダウンキャストという.
互換の無い型を付与することはできない。
(`string` -> `1` など)

### アップキャスト
ダウンキャストの反対に、抽象度を上げる型の付与をアップキャストという。

```ts
function toNumber(value: string): any {
  return value
}

// string -> any にアップキャスト
```

## オブジェクトに動的に値を追加する
### `インデックスシグネチャ`
例えば、`User`に `name` は必須だが、それ以外のプロパティを動的に設定したい場合、
↓だとコンパイルタイムでエラーになる

```ts
type User = {
  name: string
}

const user1: User = {
  name: 'Bob',
  age: 32 // Type '{ name: string; age: number; }' is not assignable to type 'User'.
}
```

`インデックスシグネチャ` を使うことで、任意のプロパティを動的に設定できる

```ts
type Tyre = {
  name: string
  [k: string]: any
}

const tyre1: Tyre = {
  name: 'Grandprix 4000',
  size: 25
}
tyre1.name // string
tyre1.size // any ..
```

が、この例だと、 `size` は `any` 型になってしまうので、 `number` 型にしてみる

```ts
type Tyre2 = {
  name: string // property 'name' of type 'string' is not assignable to string
  [k: string]: number
}
```

コンパイルタイムで、エラーになる。
理由は、 `name` が `string` 型なので、 `インデックスシグネチャ` で指定している `number` 型と互換出ないため。

```ts

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
```

`インデックスシグネチャ` Union型を設定することで回避する

### インデックスシグネチャのプロパティ型を制限する

```ts
type Answer = 'like' | 'dislike' | 'unknown'

type UserHobby = {
  name: string
  hobbies: { [k: string]: Answer }
}

const example: UserHobby = {
  name: 'Bob',
  hobbies: {
    bike: 'like',
    swim: 'like',
    dance: 'unknown'
  }
}

const hobby1 = example.hobbies.bike
const hobby2 = example.hobbies.run // 存在しないプロパティだがAnswer型として扱われる, 実際は undefined
```

```ts
type UserHobby = {
  name: string
  hobbies: { [k: string]: Answer | undefined }
}
```

Union型で、`undefined` を追加して、想定外の挙動を回避する

### インデックスシグネチャのプロパティ名称を制限する:

```ts
type Answer = 'like' | 'dislike' | 'unknown'
type Sports = 'swim' | 'run' | 'soccer'
type Player = {
  name: string
  sports: { [K in Sports]?: Answer }
}
```

`[K in Sports]` は、 `Sports` 型で定義されているもののいずれか
`?`を付与することで、オプショナルであることを表せる　-> `Answer | undefined` とする必要がない

```ts
const player1: Player = {
  name: 'Jane',
  sports: {
    swim: 'like',
    run: 'dislike'
    pingpong: 'unknown' // Error
  }
}

player1.sports.run
player1.sports.soccer
player1.sports.climbing // Error
```

## const assertion

```ts
const tuple1 = [false, 1, '2']
// inferred const tuple1: (string | number | boolean)[]

const tuple2 = [false, 1, '2'] as [false, 1, '2']
// inferred const tuple2: [false, 1, "2"]

const tuple3 = [false, 1, '2'] as const
// inferred const tuple2: [false, 1, "2"]
```

```ts
const a = 'some'
let b = a
// b is inferred string

const c = 'other' as const
let d = c
// d is inferred other
```

```ts
export const CONST = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT'
} as const
```

## non-null assertion

```ts
function greet(name?: string) {
  // console.log(`Hello ${name.toUpperCase()}`) // Compile time error
  console.log(`Hello ${name!.toUpperCase()}`) // non-null assertion
}
```

- `name` に `null` or `undefined` が入ってきた場合に Runtime error になる.
- 基本的には使わなほうが良い

## typeof/in/instanceof
### typeof
`typeof` で 変数の型情報を得ることができる

```ts
function reset(value: number | string | boolean) {
  const v0 = value
  // inferred with const v0: string | number | boolean

  if (typeof value === 'number') {
    value // (parameter) value: number
    return value
  }
  // ここでは number型はありえない
  value // (parameter) value: string | boolean

  if (typeof value === 'string') {
    value // (parameter) value: string
    return value
  }
  // ここでは number型/string型はありえない
  value // (parameter) value: boolean
  return value
}
```

### in
`in` で変数の型が持つプロパティの情報が存在するかどうかを得ることができる

```ts
type User = { gender: string }
type UserA = User & { name: string }
type UserB = User & { age: number; gratitude: string }

function userType(user: UserA | UserB) {
  if ('gender' in user) {
    user // (parameter) user: UserA | UserB
  }

  if ('name' in user) {
    user // (parameter) user: UserA
    return
  }
  user // (parameter) user: UserB
  return
}
```
