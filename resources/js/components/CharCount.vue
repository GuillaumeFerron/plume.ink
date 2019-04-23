<template>
  <transition name="fade">
    <div class="char-count-container text-muted" v-show="$store.state.pages.length">
      {{ $store.state.pages.length }} characters
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CharCount'
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables.scss';

  .char-count-container {
    position: fixed;
    top: $page-padding;
    right: $page-padding;
  }
</style>
