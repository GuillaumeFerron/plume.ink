<template>
  <div class="plume-container">
    <page v-for="(page, index) in pages" :page="page" :key="`page-${index}`"></page>
    <loader :loading="false"></loader>
  </div>
</template>

<script>
  import Page from './Page'
  import Loader from './Loader'

  export default {
    name: 'Plume',
    components: { Loader, Page },
    data() {
      return {
        pages: []
      }
    },
    mounted() {
      window.axios.get('/api/v1/pages')
        .then(response => {
          this.pages = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>
