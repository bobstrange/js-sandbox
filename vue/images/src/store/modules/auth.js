import qs from 'qs'
import api from '../../api/imgur'

const state = {
  token: null
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
    console.log('accessToken: ', accessToken)
    commit('setToken', accessToken)
  },
  logout: ({ commit }) => {
    commit('setToken', null)
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
