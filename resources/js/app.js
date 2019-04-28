/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import settingsManagement from './mixins/settingsManagement'

require('./bootstrap')

window.Vue = require('vue')

import store from './store'


// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

if (document.getElementById('plume')) {
  Vue.mixin(settingsManagement)
  Vue.component('plume', require('./components/Plume.vue').default)

  store.dispatch('init')

  const app = new Vue({
    el: '#plume',
    store
  })
}
