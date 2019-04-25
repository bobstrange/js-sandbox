# Javascript handbook memo
## 関数の引数について

引数が多い場合は、`spread` 演算子を使って順番に依存させないようにすることができる

```
const myFunction = ({ arg1 = 100, arg2, arg3 = 'Test' }) => {
    console.log(`arg1: ${arg1}`)
    console.log(`arg2: ${arg2}`)
    console.log(`arg3: ${arg3}`)
}
```

```
> myFunction({ arg1: 1000, arg2: 'passed' })
arg1: 1000
arg2: passed
arg3: Test
undefined
```

```
> myFunction({ arg2: 1000, arg3: 'passed' })
arg1: 100
arg2: 1000
arg3: passed
undefined
```

```
> myFunction({})
arg1: 100
arg2: undefined
arg3: Test
undefined
```

引数を渡さない (undefinedとして解釈)すると、Objectのdestructuringに失敗してエラー
```
> myFunction()
TypeError: Cannot destructure property `arg1` of 'undefined' or 'null'.
    at myFunction (repl:1:20)
)
```

## 関数の戻り値について

- 複数の戻り値を返したい場合は、ArrayかObjectを返す
    - 呼び出し側でdestructureできる

### Arrayの例
```
> const someFunc = () => {
... return ['Bob', 'Strange']
... }
undefined
> const [firstName, lastName] = someFunc()
undefined
> firstName
'Bob'
> lastName
'Strange'
>
```

### Objectの例
```
> const objectFunc = () => {
...     return { firstName: 'Bob', lastName: 'Strange' }
... }
undefined
> let { firstName, lastName } = objectFunc()
undefined
> firstName
'Bob'
> lastName
'Strange'

```
