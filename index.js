// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App'
import router from './router'


// Overides for Material Design Theme
Vue.use(Vuetify, {
  theme: {
    primary: '#d32f2f',
    secondary: '#424242',
    accent: '#ff6659',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
setTimeout(function () {
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
}, 500);
