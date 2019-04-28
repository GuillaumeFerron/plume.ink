<template>
  <div class="account">
    <div class="setting row m-0">
      <i class="fa fa-user"></i>
      <span class="ml-auto">{{ $store.getters.username }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Account'
  }
</script>

<style scoped>

</style>
