import Vue from 'vue'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'

import store from '../store/store'

Vue.use(vueScrollto)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
