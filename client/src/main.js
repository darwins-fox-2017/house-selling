import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'
const VueGoogleMaps = require('vue2-google-maps');

import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueLocalStorage)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDRIQcodFdK7PHsPXTc4QhpqKFDxX5lBok',
    v: '3.26',
    libraries: 'places', //// If you need to use place input
  }
});
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
