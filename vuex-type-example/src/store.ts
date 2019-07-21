import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 as number | null,
    name: null as string | null
  },
  getters: {
    getName(state) {
      // Inferred correctly
      // (parameter) state: {
      //   count: number | null;
      //   name: string;
      // }
      return state.name
    },
    greet(state, getters) {
      // Problem !!
      // (parameter) getters: any
      return `My name is ${getters.getName.toUpperCase()}`
    }
  },
  mutations: {
    setName(state, payload) {
      // Problem !!
      // (parameter) payload: any
      state.name = payload
    },
    increment(state) {
      state.count++ // Compile error -> object possibly null
    }
  },
  actions: {
    asyncSetName(ctx, payload) {
      ctx.commit('setName', { name: payload })
      console.log(ctx.state.name)
    },
    asyncIncrement(ctx) {
      ctx.commit('increment')
      console.log(ctx.state.count)
    },
    async countup(ctx) {
      while(true) {
        await(() => {
          new Promise(resolve => { setTimeout(resolve, 1000) })
        })()
        ctx.dispatch('increment')
      }
    }

  }
})
