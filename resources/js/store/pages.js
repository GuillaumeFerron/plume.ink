export default {
  state: {
    pages: [],
    saveAll: false,
    updating: {}
  },
  getters: {
    pages: state => state.pages,
    saveAll: state => state.saveAll,
    updating: state => {
      let pageUpdating = false
      Object.keys(state.updating).forEach((key) => {
        pageUpdating = pageUpdating || state.updating[key]
        if (pageUpdating) {
          return true
        }
      })

      return pageUpdating
    }
  },
  mutations: {
    INIT_UPDATING(state) {
      state.pages.forEach((page) => {
        Vue.set(state.updating, page.id, false)
      })
    },
    PAGE_UPDATING(state, id) {
      Vue.set(state.updating, id, true)
    },
    PAGE_DONE_UPDATING(state, id) {
      Vue.set(state.updating, id, false)

      if (state.saveAll) {
        state.saveAll = false
      }
    },
    UPDATE_PAGES(state, payload) {
      state.pages = payload
    },
    UPDATE_PAGE(state, payload) {
      state.pages.forEach((index, page) => {
        if (page.id + '' === payload.id + '') {
          Vue.set(state.pages, index, { ...page, body: payload.content })
        }
      })
    },
    SAVE_ALL(state, value = true) {
      state.saveAll = value
    }
  },
  actions: {
    getPages({ state, commit }) {
      return new Promise((resolve, reject) => {
        window.axios.get(`/api/v1/pages?api_token=${laravel.apiToken}`)
          .then(response => {
            commit('UPDATE_PAGES', response.data.data)
            resolve()
          })
          .catch(error => {
            console.log(error)
            reject()
          })
      })
    },
    updatePage({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('PAGE_UPDATING', payload.id)

        window.axios.post(`/api/v1/pages?api_token=${laravel.apiToken}`, {
          page_id: payload.id,
          body: payload.content
        })
          .then(response => {
            console.log(response.data.message)
            commit('UPDATE_PAGE', payload)
            commit('TOGGLE_LOADING', false)
            commit('PAGE_DONE_UPDATING', payload.id)

            resolve()
          })
          .catch(error => {
            console.log(error)
            commit('ADD_LOADING_ERROR', error.message)
            commit('TOGGLE_LOADING', false)
            commit('PAGE_DONE_UPDATING', payload.id)

            reject()
          })
      })
    },
    initPages({ state, commit, dispatch }) {
      dispatch('getPages').then((response) => {
        commit('INIT_UPDATING')
      })
    }
  }
}
