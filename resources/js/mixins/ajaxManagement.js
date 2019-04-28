export default {
  mounted() {
    window.axios.interceptors.request.use((config) => {
      this.$store.commit('AJAX_PUSH', config.url)
      return config
    }, (error) => {
      let index = this.$store.state.ajaxQueue.indexOf(error.config.url)
      index !== -1 ? this.$store.commit('AJAX_POP', index) : ''
      this.$store.commit('ADD_LOADING_ERROR', error.message)

      return Promise.reject(error)
    })

    window.axios.interceptors.response.use((response) => {
      setTimeout(() => {
        let index = this.$store.state.ajaxQueue.indexOf(response.config.url)
        index !== -1 ? this.$store.commit('AJAX_POP', index) : ''
      }, 200)
      return response
    }, (error) => {
      let index = this.$store.state.ajaxQueue.indexOf(error.config.url)
      index !== -1 ? this.$store.commit('AJAX_POP', index) : ''
      this.$store.commit('ADD_LOADING_ERROR', error.message)

      return Promise.reject(error)
    })
  }
}
