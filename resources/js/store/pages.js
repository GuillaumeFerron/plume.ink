export default {
  state: {
    pages: '',
    saveAll: false,
    updating: false,
    length: 0,
    contentInit: false,
    modified: false
  },
  getters: {
    pages: state => {
      return state.pages.match(new RegExp('.{1,' + maxLength + '}', 'g'))
    },
    updating: state => state.updating
  },
  mutations: {
    PAGE_UPDATING(state) {
      state.updating = true
    },
    PAGE_DONE_UPDATING(state) {
      state.updating = false
    },
    UPDATE_PAGES(state, payload) {
      state.pages = payload
    },
    UPDATE_LENGTH(state, payload) {
      state.length = payload
    },
    CONTENT_INIT(state) {
      state.contentInit = true
    },
    CONTENT_MODIFIED(state, value = true) {
      state.modified = value
    }
  },
  actions: {
    getPages({ state, commit }) {
      return new Promise((resolve, reject) => {
        window.axios.get(`/api/v1/pages?api_token=${laravel.apiToken}`)
          .then(response => {
            if (response.data.data[0]) {
              commit('UPDATE_PAGES', response.data.data.reduce((accumulator, currentValue, currentIndex) => {
                return currentIndex === 0 ? accumulator : accumulator += currentValue.body
              }, response.data.data[0].body))
            }
            if (!state.contentInit) {
              // Leave timeout to let the store propagate the pages
              setTimeout(() => {
                commit('CONTENT_INIT')
              }, 10)
            }

            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    updatePages({ state, commit, getters, dispatch }, payload) {
      commit('PAGE_UPDATING')
      commit('UPDATE_PAGES', payload)

      return new Promise((resolve, reject) => {
        dispatch('updatePage', 0)
          .then((response) => {
            console.log(response.data.message)
            commit('PAGE_DONE_UPDATING')
            commit('CONTENT_MODIFIED', false)

            resolve(response)
          })
          .catch((error) => {
            console.log(error)
            commit('ADD_LOADING_ERROR', error.message)
            commit('PAGE_DONE_UPDATING')
            commit('CONTENT_MODIFIED', false)

            reject(error)
          })
      })
    },
    updatePage({ getters, commit, dispatch }, index) {
      return new Promise((resolve, reject) => {
        window.axios.post(`/api/v1/pages?api_token=${laravel.apiToken}`, {
          page_index: index,
          body: getters.pages[index],
          last: index === getters.pages.length - 1
        })
          .then(response => {
            if (index !== getters.pages.length - 1) {
              dispatch('updatePage', index + 1)
                .then((response) => {
                  resolve(response)
                })
                .catch((error) => [
                  reject(error)
                ])
            } else {
              resolve(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    initPages({ state, commit, dispatch }) {
      return dispatch('getPages')
    }
  }
}
