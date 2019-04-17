<template>
  <div class="loader-container text-muted">
    <transition name="fade" mode="out-in">
      <div class="loader-loaded" key="loader-loaded" v-if="!loading && !$store.state.loading"><i
        class="fa fa-check"></i></div>
      <div class="loader-loading" key="loader-loading" v-else><i class="fa fa-times"></i></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .loader-container {
    position: fixed;
    z-index: 99;
    bottom: 10px;
    right: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
