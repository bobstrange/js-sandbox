interface State {
  count: number
}

const state: State = {
  count: 0
}

/**
 * Example 1 add type annotation for each getters
 */
const getters = {
  // Added type annotation
  double(state: State) {
    return state.count * 2
  },
  // Added type annotation
  expo2(state: State) {
    return state.count ** 2
  },
  // Added type annotation
  expo(state: State) {
    return (amount: number) => state.count ** amount
  }
}

/**
 * Example2 declare MappedTypes Getters
 */
type Getters<S> = {
  [k: string]: (state: S) => unknown
}

const getters2: Getters<State> = {
  // We don't need to add type annotation here
  double(state) {
    return state.count
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return (amount: number) => state.count ** amount
  }
}

/**
 * declare interface for getters
 */

 interface CounterGetters {
   double: number
   expo2: number
   expo: (amount: number) => number
 }

 type Getters2<S, G> = {
   [K in keyof G]: (state: S, getters: G) => G[K]
 }

const getters3: Getters2<State, CounterGetters> = {
  double(state) {
    return state.count
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return amount => state.count ** amount
  }
}

interface CounterMutations {
  setCount: { amount: number }
  multi: number
  increment: void
}

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

const mutations: Mutations<State, CounterMutations> = {
  setCount(state, payload) {
    state.count = payload.amount
  },
  multi(state, payload) {
    state.count = state.count * payload
  },
  increment(state) {
    state.count += 1
  }
}
