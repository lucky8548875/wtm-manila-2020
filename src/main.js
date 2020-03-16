import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import VueCountdown from '@chenfengyuan/vue-countdown';

import VueClazyLoad from 'vue-clazy-load'

Vue.component(VueCountdown.name, VueCountdown);

Vue.use(VueClazyLoad)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
