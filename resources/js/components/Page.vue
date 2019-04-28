<template>
  <div class="page-container" :inner-html.prop="page">
  </div>
</template>

<script>
  export default {
    name: 'Page',
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
