import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Axios from 'axios'
import './assets/scss/main.scss'

Axios.defaults.baseURL = 'https://avatars.zorg.cc/api/'
Vue.prototype.$http = Axios

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
