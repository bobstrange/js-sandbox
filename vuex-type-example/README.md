# vuex-type-example

## 型について

`getter` や `payload` は `any` 型として推論されてしまう

```ts
export interface Payload {
  type: string
}

export interface MutationPayload extends Payload {
  payload: any
}

export interface ActionPayload extends Payload {
  payload: any
}i
```

## vuexの型として必要なもの

- stateの参照
- getterの関数同士の参照
- RootState, RootGettersの参照
- MutationType/ActionTypeと, 実装の名前の整合性
- mutationと、actionのpayload

### stateの参照
stateの`interface`を定義する

```ts
interface State {
  count: number
}

const state: State = {
  count: 1000
}
```
