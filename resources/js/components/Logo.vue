<template>
  <transition name="fade">
    <div class="char-count-container text-muted" v-show="$store.state.pages.length" key="char-count">
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
  @import '../../sass/_variables.scss';

  .char-count-container {
    position: absolute;
    top: $page-padding;
    left: $page-padding;
  }
</style>
