<template>
  <transition name="fade">
    <div class="reload-container text-muted clickable" v-show="$store.state.user" key="logo"
         :style="{color: `${getFontColor} !important`}"
         @click="reload">
      <i class="fas fa-redo"></i>
    </div>
  </transition>
</template>

<script>
  import keyboardManagement from '../../mixins/keyboardManagement'

  export default {
    name: 'Reload',
    mixins: [keyboardManagement]
  }
</script>

<style scoped lang="scss">
  @import '../../../sass/_variables.scss';

  .reload-container {
    position: fixed;
    bottom: $page-padding;
    left: $page-padding;

    i {
      -webkit-transition: color $default-transition-time;
      -moz-transition: color $default-transition-time;
      -ms-transition: color $default-transition-time;
      -o-transition: color $default-transition-time;
      transition: color $default-transition-time;
    }

    &.rotate {
      -webkit-animation-name: rotate;
      -webkit-animation-duration: 1000ms;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: ease-in-out;

      -moz-animation-name: rotate;
      -moz-animation-duration: 1000ms;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: ease-in-out;

      -ms-animation-name: rotate;
      -ms-animation-duration: 1000ms;
      -ms-animation-iteration-count: infinite;
      -ms-animation-timing-function: ease-in-out;

      animation-name: rotate;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

    }
  }
</style>
