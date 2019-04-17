import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    loading: state => state.loading
  },
  mutations: {
    TOGGLE_LOADING(state, value = false) {
      state.loading = value
    }
  },
  actions: {
    //
  }
})
