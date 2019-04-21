<template>
  <transition name="fade">
    <div :class="`sidebar-container ${sidebarVisible ? 'sidebar-visible' : ''}`" v-show="$store.state.pages.length"
         key="sidebar">
      <div class="sidebar-toggle text-muted clickable hoverable" @click="sidebarVisible = !sidebarVisible"><i
        class="fa fa-ellipsis-h"></i></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        sidebarVisible: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables.scss';
  @import '../../sass/_mixins.scss';

  .sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: $sidebar-width;
    height: 100vh;
    z-index: 99;
    @include transition();
    -webkit-transform: translate(-100%, 0);
    -moz-transform: translate(-100%, 0);
    -ms-transform: translate(-100%, 0);
    -o-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    background-color: #fff;
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
      bottom: 10px;
      right: 0;
      -webkit-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -moz-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -ms-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -o-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
    }
  }
</style>
