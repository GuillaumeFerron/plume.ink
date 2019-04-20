<template>
  <div class="plume-container">
    <sidebar></sidebar>
    <page v-for="(page, index) in $store.state.pages.pages" :page="page" :key="`page-${index}`"></page>
    <loader :loading="false"></loader>
  </div>
</template>

<script>
  import Page from './Page'
  import Loader from './Loader'
  import Sidebar from './Sidebar'
  import keyboardManagement from '../mixins/keyboardManagement'

  export default {
    name: 'Plume',
    components: { Sidebar, Loader, Page },
    mixins: [keyboardManagement]
  }
</script>

<style scoped lang="scss">
</style>
