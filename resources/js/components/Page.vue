<template>
  <div class="page-container" :inner-html.prop="page">
  </div>
</template>

<script>
  import Loader from './Loader'

  export default {
    name: 'Page',
    components: { Loader },
    props: {
      page: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
</style>
