<template>
  <transition name="fade">
    <div :class="`sidebar-container p-3 ${sidebarVisible ? 'sidebar-visible' : ''}`" v-show="$store.state.pages.length"
         key="sidebar">
      <div class="account">
        <div class="setting row m-0">
          <i class="fa fa-user"></i>
          <span class="ml-auto">{{ $store.getters.username }}</span>
        </div>
      </div>
      <hr>
      <div class="settings">
        <div class="setting row m-0">
          <span>Font Family</span>
          <span class="ml-auto">{{ $store.state.settings.settings['font-family'] }}</span>
        </div>
        <div class="setting row m-0 mt-2">
          <span>Font Size</span>
          <span class="ml-auto">{{ $store.state.settings.settings['font-size'] }}</span>
        </div>
        <div class="setting row m-0 mt-2">
          <span>Color Mode</span>
          <span class="ml-auto">{{ $store.state.settings.settings['color-mode'] }}</span>
        </div>
        <div class="setting row m-0 mt-2">
          <span>Primary Color</span>
          <span class="ml-auto">{{ $store.state.settings.settings['primary-color'] }}</span>
        </div>
        <div class="setting row m-0 mt-2">
          <span>Characters Count</span>
          <span class="ml-auto">{{ $store.state.settings.settings['char-count'] }}</span>
        </div>
        <div class="setting row m-0 mt-2">
          <span>Autosave</span>
          <span class="ml-auto">{{ $store.state.settings.settings['autosave'] }}</span>
        </div>
      </div>
      <hr>
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
    bottom: 0;
    left: 0;
    width: $sidebar-width;
    height: 100%;
    z-index: 99;
    color: #555;
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
      bottom: $page-padding;
      right: 0;
      -webkit-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -moz-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -ms-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      -o-transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
      transform: translate3d(calc(100% + #{$page-padding}), 0, 0);
    }
  }
</style>
