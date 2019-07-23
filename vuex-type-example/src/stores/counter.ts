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

/**
 * Mutations
 */
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

/**
 * Actions
 */

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
