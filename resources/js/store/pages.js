export default {
  state: {
    pages: '',
    saveAll: false,
    updating: false
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
    SAVE_ALL(state, value = true) {
      state.saveAll = value
    }
  },
  actions: {
    getPages({ commit }) {
      commit('TOGGLE_LOADING', true)

      return new Promise((resolve, reject) => {
        window.axios.get(`/api/v1/pages?api_token=${laravel.apiToken}`)
          .then(response => {
            commit('UPDATE_PAGES', response.data.data.reduce((accumulator, currentValue, currentIndex) => {
              return currentIndex === 0 ? accumulator : accumulator += currentValue.body
            }, response.data.data[0].body))
            commit('TOGGLE_LOADING', false)

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
            commit('TOGGLE_LOADING', false)
            commit('PAGE_DONE_UPDATING')

            resolve(response)
          })
          .catch((error) => {
            console.log(error)
            commit('ADD_LOADING_ERROR', error.message)
            commit('TOGGLE_LOADING', false)
            commit('PAGE_DONE_UPDATING')

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
      dispatch('getPages')
    }
  }
}
