<template>
  <div class="page-container" contenteditable="true" @input="pageChange" v-html="page.body">
  </div>
</template>

<script>
  import Loader from './Loader'

  export default {
    name: 'Page',
    components: { Loader },
    data() {
      return {
        timeout: ''
      }
    },
    props: {
      page: {
        required: true,
        type:
        Object
      }

    },
    methods: {
      pageChange() {
        this.$store.commit('TOGGLE_LOADING', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.updatePage()
        }, 1000)
      },
      updatePage() {
        window.axios.post('/api/v1/pages', {
          page_id: this.page.id,
          body: this.$el.innerHTML
        })
          .then(response => {
            console.log(response.data.message)
            this.$store.commit('TOGGLE_LOADING', false)
          })
          .catch(error => {
            console.log(error)
            this.$store.commit('ADD_LOADING_ERROR', error.message)
          })
      }
    }
  }
</script>

<style scoped>
  .page-container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .page-container:focus {
    outline: none;
  }
</style>
