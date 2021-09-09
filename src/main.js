import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/styles/styles.scss'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
