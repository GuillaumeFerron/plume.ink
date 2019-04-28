export default {
  state: {
    user: {}
  },
  getters: {
    username: state => state.user.name
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    initUser({ state, commit }) {
      commit('UPDATE_USER', user)
    }
  }
}
