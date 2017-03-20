import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UserApi from '@/api/users'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

import Axios from 'axios'
Vue.$http = Axios

Axios.defaults.baseURL = 'https://salty-springs-87982.herokuapp.com/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.VueMaterialntials = true

Vue.config.productionTip = false

UserApi.checkLoggedIn()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
