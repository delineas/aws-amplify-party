import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

import './utils/translations'
import './utils/listener'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
