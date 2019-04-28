<template>
  <div class="settings">
    <div class="setting row m-0">
      <span class="font-weight-bold mb-2">Font Family</span>
      <div class="col-12"
           v-for="(fontFamily, index) in settings['font-families']">
        <input type="radio" :id="`family-${index}`" name="font-family"
               :checked="$store.state.settings.settings['font-family'] === fontFamily"
               @click="updateSetting('font-family', fontFamily)">
        <label :for="`family-${index}`" :style="{fontFamily: `${fontFamily} !important`}">{{ fontFamily }}</label>
      </div>
    </div>
    <div class="setting row m-0">
      <span class="font-weight-bold mb-2">Font Size</span>
      <div class="col-12"
           v-for="(fontSize, index) in settings['font-sizes']">
        <input type="radio" :id="`size-${index}`" name="font-size"
               :checked="$store.state.settings.settings['font-size'] === fontSize"
               @click="updateSetting('font-size', fontSize)">
        <label :for="`size-${index}`"
               :style="{fontSize: `${fontSize === 'small' ? '10px' : fontSize === 'large' ? '16px' : '13px'} !important`}">{{
          fontSize }}</label>
      </div>
    </div>
    <div class="setting row m-0 mt-2">
      <span class="font-weight-bold">Dark Mode</span>
      <div class="custom-control custom-switch ml-auto">
        <input type="checkbox" class="custom-control-input" id="color-mode-switch"
               :checked="$store.state.settings.settings['color-mode'] === 'dark'"
               @change="toggleDarkMode('color-mode')">
        <label class="custom-control-label" for="color-mode-switch"></label>
      </div>
    </div>
    <div class="setting row m-0 mt-2">
      <span class="font-weight-bold">Primary Color</span>
      <div class="col-12 d-flex justify-content-around mt-2">
        <div
          :class="`color-choice clickable color-${color} rounded text-center ${color === $store.state.settings.settings['primary-color'] ? 'border' : ''}`"
          v-for="color in settings['primary-colors']"
          @click="toggleColor(color)">
          <i class="fa fa-check text-white font-weight-bold"
             v-if="color === $store.state.settings.settings['primary-color']"></i>
        </div>
      </div>
    </div>
    <div class="setting row m-0 mt-2">
      <span class="font-weight-bold">Characters Count</span>
      <div class="custom-control custom-switch ml-auto">
        <input type="checkbox" class="custom-control-input" id="char-count-switch"
               :checked="$store.state.settings.settings['char-count'] === '1'"
               @change="toggleSetting('char-count')">
        <label class="custom-control-label" for="char-count-switch"></label>
      </div>
    </div>
    <div class="setting row m-0 mt-2">
      <span class="font-weight-bold">Autosave</span>
      <div class="custom-control custom-switch ml-auto">
        <input type="checkbox" class="custom-control-input" id="autosave-switch"
               :checked="$store.state.settings.settings['autosave'] === '1'"
               @change="toggleSetting('autosave')">
        <label class="custom-control-label" for="autosave-switch"></label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
    computed: {
      settings() {
        return window.settings
      }
    },
    methods: {
      updateSetting(key, value) {
        window.axios.post(`/api/v1/setting?api_token=${laravel.apiToken}`, {
          key: key,
          value: value
        })
          .then((response) => {
            this.$store.commit('UPDATE_SETTINGS', response.data.data)
          })
      },
      toggleDarkMode(key) {
        this.updateSetting(key, $(`#${key}-switch`)[0].checked ? 'dark' : 'white')
      },
      toggleSetting(key) {
        this.updateSetting(key, $(`#${key}-switch`)[0].checked ? '1' : '0')
      },
      toggleColor(color) {
        this.updateSetting('primary-color', color)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../sass/_variables.scss';
  @import '../../../sass/_mixins.scss';

  .color-choice {
    width: 20px;
    height: 20px;
    border-width: 2px !important;

    &.color-default {
      background-color: $plume-yellow-700;
      border-color: $plume-yellow-700 !important;
    }

    &.color-blue {
      background-color: $plume-blue-700;
      border-color: $plume-blue-700 !important;
    }

    &.color-green {
      background-color: $plume-green-700;
      border-color: $plume-green-700 !important;
    }

    &.color-red {
      background-color: $plume-red-700;
      border-color: $plume-red-700 !important;
    }
  }
</style>
