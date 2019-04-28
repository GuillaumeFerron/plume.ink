<template>
  <div class="shortcuts">
    <div class="setting row m-0">
      <span class="font-weight-bold"><span v-html="actionKey"></span> + B</span>
      <span class="text-small ml-auto font-weight-bold">Bold</span>
    </div>
    <div class="setting row m-0">
      <span class="font-weight-bold"><span v-html="actionKey"></span> + I</span>
      <span class="text-small ml-auto font-italic">Italic</span>
    </div>
    <div class="setting row m-0">
      <span class="font-weight-bold">CTRL + U</span>
      <span class="text-small ml-auto"><u>Underline</u></span>
    </div>
    <div class="setting row m-0 mt-3">
      <span class="font-weight-bold"><span v-html="actionKey"></span> + S</span>
      <span class="text-small ml-auto">Save</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shortcuts',
    computed: {
      actionKey() {
        return window.navigator.platform === 'MacIntel' ? '&#8984;' : 'CTRL'
      }
    }
  }
</script>

<style scoped>

</style>
