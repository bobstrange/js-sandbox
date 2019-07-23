import { Getters, Mutations, Actions } from './types'
import { CounterState, CounterGetters, CounterMutations, CounterActions } from './counterType'

const state: CounterState = {
  count: 0
}

const getters: Getters<CounterState, CounterGetters> = {
  double(state) {
    return state.count * 2
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return (amount) => state.count ** amount
  }
}

const mutations: Mutations<CounterState, CounterMutations> = {
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

const actions: Actions<
  CounterState,
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
