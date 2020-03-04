import api from '../../api/imgur'
import { router } from '../../main'

export const state = () => ({
  images: []
})

export const getters = {
  allImages: state => state.images,
}

export const mutations = {
  setImages: (state, payload) => {
    state.images = payload
  }
}

export const actions = {
  async fetchImages({ commit, rootState }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.data)
  },
  // eslint-disable-next-line no-unused-vars
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth

    await api.uploadImages(images, token)

    router.push('/')
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
