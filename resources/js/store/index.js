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
    ajaxQueue: [],
    loadingTimeout: 1500,
    sidebarVisible: false
  },
  getters: {
    loading: (state, getters) => {
      return state.loading || getters.updating || state.ajaxQueue.length > 0
    },
    loadingError: state => state.loadingError
  },
  mutations: {
    TOGGLE_LOADING(state, value = false) {
      state.loading = value
    },
    ADD_LOADING_ERROR(state, value = 'Error !') {
      state.loadingError = value
    },
    AJAX_PUSH(state, url) {
      state.ajaxQueue.push(url)
    },
    AJAX_POP(state, index) {
      state.ajaxQueue.splice(index, 1)
    },
    TOGGLE_SIDEBAR(state, value = !state.sidebarVisible) {
      state.sidebarVisible = value
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
