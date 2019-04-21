<template>
  <div class="plume-container">
    <sidebar></sidebar>
    <div contenteditable="true" id="page-editable" @input="pageChange" :inner-html.prop="$store.state.pages.pages">
    </div>
    <loader :loading="false"></loader>
  </div>
</template>

<script>
  import Page from './Page'
  import Loader from './Loader'
  import Sidebar from './Sidebar'
  import keyboardManagement from '../mixins/keyboardManagement'
  import parser from '../mixins/parser'

  export default {
    name: 'Plume',
    components: { Sidebar, Loader, Page },
    mixins: [keyboardManagement, parser],
    data() {
      return {
        timeout: ''
      }
    },
    methods: {
      /**
       * Triggered when the user changes the pag content
       */
      pageChange() {
        this.$store.commit('TOGGLE_LOADING', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.$store.dispatch('updatePages', this.$el.querySelector('#page-editable').innerHTML)
        }, this.$store.state.loadingTimeout)
      }
    }
  }
</script>

<style scoped lang="scss">
  #page-editable {
    max-width: 800px;
    width: 100vw;
    min-height: 80vh;
    margin-left: auto;
    margin-right: auto;
  }

  #page-editable:focus {
    outline: none;
  }
</style>
