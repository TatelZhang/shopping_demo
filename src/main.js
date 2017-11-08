// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import { api } from './api.config'
Vue.use(VueResource);


Vue.config.productionTip = false
Vue.prototype.api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<layout/>',
  components: { layout }
  
})
