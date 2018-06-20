import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'

Vue.use(VueRouter);
Vue.use(ElementUi);
Vue.use(VueResource);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
