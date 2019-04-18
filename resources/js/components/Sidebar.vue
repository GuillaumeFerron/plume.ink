<template>
  <div :class="`sidebar-container ${sidebarVisible ? 'sidebar-visible' : ''}`">
    <div class="sidebar-toggle text-muted clickable" @click="sidebarVisible = !sidebarVisible"><i class="fa fa-ellipsis-h"></i></div>
  </div>
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

    &.sidebar-visible {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    .sidebar-toggle {
      position: absolute;
      bottom: 10px;
      right: 0;
      -webkit-transform: translate(calc(100% + #{$page-padding}), 0);
      -moz-transform: translate(calc(100% + #{$page-padding}), 0);
      -ms-transform: translate(calc(100% + #{$page-padding}), 0);
      -o-transform: translate(calc(100% + #{$page-padding}), 0);
      transform: translate(calc(100% + #{$page-padding}), 0);
    }
  }
</style>
