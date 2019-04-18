import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    loadingError: ''
  },
  getters: {
    loading: state => state.loading,
    loadingError: state => state.loadingError
  },
  mutations: {
    TOGGLE_LOADING(state, value = false) {
      state.loading = value
    },
    ADD_LOADING_ERROR(state, value = 'Error !') {
      state.loadingError = value
    }
  },
  actions: {
    //
  }
})
