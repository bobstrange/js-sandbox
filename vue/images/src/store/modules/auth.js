import qs from 'qs'
import api from '../../api/imgur'

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
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
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
