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
          this.$store.commit('TOGGLE_LOADING', false)
        }, 1000)
      }
    },
    watch: {
      '$store.state.loading'(newValue, oldValue) {
        if (!newValue) {
          window.axios.post('/api/v1/pages', {
            page_id: this.page.id,
            body: this.$el.innerHTML
          })
            .then(response => {
              console.log(response.data.message)
            })
            .catch(error => {
              console.log(error)
            })
        }
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
