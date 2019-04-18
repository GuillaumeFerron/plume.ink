<template>
  <div class="loader-container text-muted">
    <transition name="fade" mode="out-in">
      <div class="loader-loaded" key="loader-loaded"
           v-if="!loading && !$store.state.loading && !$store.state.loadingError"><i
        class="fa fa-check"></i></div>
      <div class="loader-error" key="loader-error"
           v-else-if="!loading && !$store.state.loading && !!$store.state.loadingError"><i class="fa fa-times"></i>
      </div>
      <div class="loader-loading" v-else-if="true" key="loader-loading"><i class="fa fa-circle-notch"></i></div>
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

<style scoped lang="scss">
  @import '../../sass/_variables.scss';

  .loader-container {
    position: fixed;
    z-index: 99;
    bottom: $page-padding;
    right: $page-padding;
  }

  .loader-loading {
    -webkit-animation: spin 0.5s linear infinite;
    -moz-animation: spin 0.5s linear infinite;
    animation: spin 0.5s linear infinite;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
