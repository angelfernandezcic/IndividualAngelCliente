import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import $ from './assets/js/jquery-3.2.1.js'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
