import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router';
import routes  from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
Vue.use(VueRouter);
var router = new VueRouter({routes})


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
