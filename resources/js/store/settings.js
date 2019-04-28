export default {
  state: {
    settings: {}
  },
  getters: {},
  mutations: {
    UPDATE_SETTINGS(state, payload) {
      state.settings = payload
    }
  },
  actions: {
    initSettings({ state, commit }) {
      return new Promise((resolve, reject) => {
        window.axios.get(`/api/v1/settings?api_token=${laravel.apiToken}`)
          .then(response => {
            commit('UPDATE_SETTINGS', response.data.data)

            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
}
