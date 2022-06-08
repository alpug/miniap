import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueFormulate from '@braid/vue-formulate';

Vue.config.productionTip = false


// axiosSetUp()

Vue.config.performance = true
Vue.use(VueFormulate)
// Vue.use(VueAxios, axios)
// Vue.use(HighchartsVue)
Vue.use(BootstrapVue, IconsPlugin)

Vue.prototype.$log = console.log.bind(console)

// Vue.use({
//     install (Vue) {
//       Vue.prototype.$data = axios
//       Vuex.Store.prototype.$data = axios
//   }
// })


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')