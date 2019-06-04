import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$url="http://localhost:8085"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
