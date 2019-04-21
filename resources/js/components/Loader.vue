<template>
  <transition name="fade">
    <div class="loader-container text-muted" v-show="$store.state.pages.length" key="loader">
      <transition name="fade">
        <div class="hover-message" v-if="hovered" :style="{top: top + 'px', left: left + 'px'}">
          <transition name="fade" mode="out-in">
            <span key="loader-error"
                  v-if="!!$store.getters.loadingError">Oops ! {{ $store.getters.loadingError }}</span>
            <span key="loader-loaded"
                  v-else-if="!loading && !$store.getters.loading && !$store.getters.loadingError">All good !</span>
            <span key="loader-loading" v-else-if="loading || $store.getters.loading">Hold on...</span>
          </transition>
        </div>
      </transition>
      <div class="icon-container" @mouseout="hovered = false">
        <transition name="fade" mode="out-in">
          <div class="loader-error hoverable" key="loader-error"
               v-if="!!$store.getters.loadingError"><i class="fa fa-times"></i>
          </div>
          <div class="loader-loaded hoverable" key="loader-loaded"
               v-else-if="!loading && !$store.getters.loading && !$store.getters.loadingError"><i
            class="fa fa-check"></i></div>
          <div class="loader-loading hoverable" v-else-if="loading || $store.getters.loading" key="loader-loading"><i
            class="fa fa-circle-notch"></i>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Loader',
    data() {
      return {
        hovered: false,
        top: '100%',
        left: '100%'
      }
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.$el.querySelector('.icon-container').addEventListener('mousemove', (e) => {
        this.hovered = true
        this.top = e.clientY
        this.left = e.clientX
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables.scss';
  @import '../../sass/_mixins.scss';

  .loader-container {
    position: fixed;
    z-index: 99;
    bottom: $page-padding;
    right: $page-padding;
  }

  .hover-message {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: fit-content;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
    @include transform(translate(-100%, -110%))
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
</style>
