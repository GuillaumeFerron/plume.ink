<template>
  <div class="plume-container">
    <logo></logo>
    <sidebar></sidebar>
    <div contenteditable="true" id="page-editable" @input="pageChange"
         :inner-html.prop="$store.state.pages.pages">
    </div>
    <char-count></char-count>
    <loader :loading="false"></loader>
  </div>
</template>

<script>
  import Page from './Page'
  import Loader from './Loader'
  import Sidebar from './Sidebar'
  import keyboardManagement from '../mixins/keyboardManagement'
  import parser from '../mixins/parser'
  import CharCount from './CharCount'
  import Logo from './Logo'

  export default {
    name: 'Plume',
    components: { Logo, CharCount, Sidebar, Loader, Page },
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
        this.$store.commit('UPDATE_LENGTH', this.$el.querySelector('#page-editable').innerText.length)
        this.$store.commit('TOGGLE_LOADING', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.$store.dispatch('updatePages', this.$el.querySelector('#page-editable').innerHTML)
        }, this.$store.state.loadingTimeout)
      }
    },
    watch: {
      '$store.state.pages.contentInit'(newValue, oldValue) {
        this.$store.commit('UPDATE_LENGTH', this.$el.querySelector('#page-editable').innerText.length)
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
