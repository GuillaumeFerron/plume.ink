<template>
  <div class="page-container" contenteditable="true" @input="pageChange" :inner-html.prop="page.body">
  </div>
</template>

<script>
  import Loader from './Loader'
  import parser from '../mixins/parser'

  export default {
    name: 'Page',
    mixins: [parser],
    components: { Loader },
    data() {
      return {
        timeout: '',
        content: ''
      }
    },
    props: {
      page: {
        required: true,
        type:
        Object
      }
    },

    mounted() {
      this.content = this.page.body
    },
    methods: {
      pageChange() {
        this.$store.commit('TOGGLE_LOADING', true)
        this.content = this.$el.innerHTML
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.updatePage()
        }, this.$store.state.loadingTimeout)
      },
      updatePage() {
        window.axios.post(`/api/v1/pages?api_token=${laravel.apiToken}`, {
          page_id: this.page.id,
          body: this.content
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
