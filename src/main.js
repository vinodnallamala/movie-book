import Vue from 'vue'
import App from './App.vue' 
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './routes'

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)




import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

}).$mount('#app')
