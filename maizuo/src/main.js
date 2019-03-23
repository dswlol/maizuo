// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD


=======
import store from './store'
>>>>>>> d48857c4bcba3e991b156279fd2adc2e3ff44b9b
import axios from 'axios'
Vue.prototype.$axios=axios
axios.defaults.baseURL="/api"
axios.defaults.headers.post['Content-type']="application/json";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
