import Vue from 'vue'
import VueRouter from 'vue-router'

import Blog from '../components/blog'
import AddBlog from '../components/content/addBlog'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {path: '/', component: Blog},
    {path: '/table', component: AddBlog}
  ],
  mode: 'history'   //去掉地址里的#
})
