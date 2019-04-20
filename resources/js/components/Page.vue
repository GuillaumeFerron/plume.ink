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
    watch: {
      '$store.state.pages.saveAll'(newValue, oldValue) {
        if (newValue) {
          this.$store.dispatch('updatePage', { id: this.page.id, content: this.content })
        }
      }
    },
    mounted() {
      this.content = this.page.body
    },
    methods: {
      /**
       * Triggered when the user changes the pag content
       */
      pageChange() {
        this.$store.commit('TOGGLE_LOADING', true)
        this.content = this.$el.innerHTML
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.$store.dispatch('updatePage', { id: this.page.id, content: this.content })
        }, this.$store.state.loadingTimeout)
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
