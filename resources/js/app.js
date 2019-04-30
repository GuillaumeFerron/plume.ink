/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import settingsManagement from './mixins/settingsManagement'

require('./bootstrap')
require('./jquery.caret')

window.Vue = require('vue')

import store from './store'
import authManagement from './mixins/authManagement'

(function ($) {
  $('.plume-loader').fadeOut('slow')
})(jQuery)

if (document.getElementById('plume')) {
  Vue.mixin(settingsManagement)
  Vue.mixin(authManagement)
  Vue.component('plume', require('./components/Plume.vue').default)

  store.dispatch('init')

  const app = new Vue({
    el: '#plume',
    store
  })
}
