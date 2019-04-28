<template>
  <transition name="fade">
    <div class="logo-container text-muted hoverable" v-show="$store.state.pages.length" key="logo"
         :style="{color: `${getFontColor} !important`}">
      <i class="fa fa-feather"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Logo'
  }
</script>

<style scoped lang="scss">
  @import '../../../sass/_variables.scss';

  .logo-container {
    position: fixed;
    top: $page-padding;
    left: $page-padding;

    i {
      -webkit-transition: color $default-transition-time;
      -moz-transition: color $default-transition-time;
      -ms-transition: color $default-transition-time;
      -o-transition: color $default-transition-time;
      transition: color $default-transition-time;
    }
  }
</style>
