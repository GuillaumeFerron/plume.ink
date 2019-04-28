<template>
  <div
    :style="{color: `${getFontColor} !important`, backgroundColor: `${getBackgroundColor} !important`}"
    :class="`w-100 plume primary-${$store.state.settings.settings['primary-color']}`">
    <div class="plume-container">
      <logo></logo>
      <sidebar></sidebar>
      <div contenteditable="true" id="page-editable" @input="pageChange"
           :inner-html.prop="$store.state.pages.pages"
           :style="{fontSize: `${getFontSize} !important`, fontFamily: `${$store.state.settings.settings['font-family']} !important`}">
      </div>
      <transition name="fade">
        <char-count v-if="$store.state.settings.settings['char-count'] === '1'"></char-count>
      </transition>
      <loader :loading="false"></loader>
    </div>
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
  import ajaxManagement from '../mixins/ajaxManagement'

  export default {
    name: 'Plume',
    components: { Logo, CharCount, Sidebar, Loader, Page },
    mixins: [keyboardManagement, parser, ajaxManagement],
    data() {
      return {
        out: ''
      }
    },
    methods: {
      /**
       * Triggered when the user changes the pag content
       */
      pageChange() {
        this.$store.commit('UPDATE_LENGTH', this.$el.querySelector('#page-editable').innerText.length)
        this.$store.commit('TOGGLE_LOADING', true)
        if (this.$store.state.settings.settings['autosave'] === '1') {
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.$store.dispatch('updatePages', this.$el.querySelector('#page-editable').innerHTML)
            this.$store.commit('TOGGLE_LOADING', false)
          }, this.$store.state.loadingTimeout)
        }
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
  @import '../../sass/_variables.scss';
  @import '../../sass/_mixins.scss';

  .plume {
    -webkit-transition: background-color $default-transition-time, color $default-transition-time;
    -moz-transition: background-color $default-transition-time, color $default-transition-time;
    -ms-transition: background-color $default-transition-time, color $default-transition-time;
    -o-transition: background-color $default-transition-time, color $default-transition-time;
    transition: background-color $default-transition-time, color $default-transition-time;
  }

  .plume-container {
    padding-top: 50px;
    padding-bottom: 50vh;
  }

  #page-editable {
    max-width: 800px;
    width: calc(100vw - 2 * #{$page-padding} - 50px);
    min-height: 80vh;
    margin-left: auto;
    margin-right: auto;
  }

  #page-editable:focus {
    outline: none;
  }
</style>
