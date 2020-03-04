import qs from 'qs'
import api from '../../api/imgur'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => api.login(),
  finalizeLogin: ({ commit }, hash) => {
    const queryString = hash.replace('#', '')
    const query = qs.parse(queryString)
    const accessToken = query.access_token
    commit('setToken', accessToken)
    window.localStorage.setItem('imgur_token', accessToken)
    router.push('/')
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
    router.push('/')
  }
}
const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
