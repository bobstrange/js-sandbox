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

### getterの関数同士の参照
Getterの`interface`を定義する

```ts
interface CounterGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

type Getters<S, G> = {
  [K in keyof G]: (state: S, getters: G) => G[K]
}

const getters: Getters<State, CounterGetters> = {
  // declare getters here
  // CounterGettersのInterfaceと齟齬があるとコンパイルエラーを得られる
}
```

### mutationの型
同様にMutationの`interface`と、Mutationsのtypeを定義する

```ts
interface CounterMutations {
  setCount: { amount: number }
  multi: number
  increment: void
}

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

const mutations: Mutations<State, CounterMutations> = {
  // declare mutations here
}
```

### actionの型
- Actionの`interface` と Actionの type を定義する
    - Actionのtypeには
      - Context
      - Commit
      - Dispatch の typeが必要なのでそれも定義する

```ts
interface CounterActions {
  asyncSetCount: { amount: number }
  asyncMulti: number
  asyncIncrement: void
}

type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
  [K in keyof A]: (ctx: Context<S, A, G, M, RS, RG>, payload: A[K]) => any
}

/**
 * S -> State
 * A -> CounterActions
 * G -> CounterGetters
 * M -> CounterMutations
 * RS -> RootState
 * RG -> RooteGetters
 */
type Context<S, A, G, M, RS, RG> = {
  commit: Commit<M>,
  dispatch: Dispatch<A>,
  state: S,
  getters: G,
  rootState: RS,
  rootGetters: RG
}

/**
 * T extends keyof M -> T型は、'setCouunt' | 'multi' | 'increment' のみに絞られる
 */
type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void

type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any

const actions: Actions<
  State,
  CounterActions,
  CounterGetters,
  CounterMutations
> = {
  asyncSetCount(ctx, payload) {
    ctx.commit('setCount', { amount: payload.amount })
  },
  asyncMulti(ctx, payload) {
    ctx.commit('multi', payload)
  },
  asyncIncrement(ctx) {
    ctx.commit('increment')
  }
}
```

一旦 `Dispatch` の戻り値の型は Promiseではなく `any` とする
