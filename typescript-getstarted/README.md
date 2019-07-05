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

`any`型を期待するパラメータは、明示的に`any`を指定する必要がrる

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
