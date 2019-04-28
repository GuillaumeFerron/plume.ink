<template>
  <transition name="fade">
    <div :class="`sidebar-container p-3 ${$store.state.sidebarVisible ? 'sidebar-visible' : ''}`"
         v-show="$store.state.pages.length"
         :style="{backgroundColor: `${getBackgroundColor} !important`}"
         key="sidebar">
      <account></account>
      <hr>
      <settings></settings>
      <hr>
      <shortcuts v-if="$store.state.screenSize !== 'xs'"></shortcuts>
      <hr v-if="$store.state.screenSize !== 'xs'">
      <div class="sidebar-toggle text-muted clickable hoverable" @click="$store.commit('TOGGLE_SIDEBAR')"
           :style="{color: `${getFontColor} !important`}"><i
        class="fa fa-ellipsis-h"></i></div>
    </div>
  </transition>
</template>

<script>
  import Settings from './Sidebar/Settings'
  import Account from './Sidebar/Account'
  import Shortcuts from './Sidebar/Shortcuts'

  export default {
    name: 'Sidebar',
    components: { Shortcuts, Account, Settings }
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables.scss';
  @import '../../sass/_mixins.scss';

  .sidebar-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    font-size: 13px;
    bottom: 0;
    left: 0;
    width: $sidebar-width;
    height: 100%;
    z-index: 99;
    -webkit-transition: all $default-transition-time;
    -moz-transition: all $default-transition-time;
    -ms-transition: all $default-transition-time;
    -o-transition: all $default-transition-time;
    transition: all $default-transition-time;
    -webkit-transform: translate(-100%, 0);
    -moz-transform: translate(-100%, 0);
    -ms-transform: translate(-100%, 0);
    -o-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    border-right: solid 1px lightgrey;

    &.sidebar-visible {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .sidebar-toggle {
      position: absolute;
      top: $page-padding;
      right: 0;
      -webkit-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -moz-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -ms-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -o-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -webkit-transition: color $default-transition-time;
      -moz-transition: color $default-transition-time;
      -ms-transition: color $default-transition-time;
      -o-transition: color $default-transition-time;
      transition: color $default-transition-time;
    }
  }
</style>
