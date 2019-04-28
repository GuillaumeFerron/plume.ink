import Vue from 'vue'
import Vuex from 'vuex'
import pages from './pages'
import settings from './settings'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    loadingError: '',
    loadingTimeout: 1500
  },
  getters: {
    loading: (state, getters) => {
      return state.loading || getters.updating
    },
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
    init({ state, commit, dispatch }) {
      window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.laravel.csrfToken

      dispatch('initPages')
      dispatch('initSettings')
      dispatch('initUser')
    }
  },
  modules: {
    namespaced: true,
    pages: pages,
    settings: settings,
    user: user
  }
})
