import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../components/blog'
import AddBlog from '../components/content/addBlog'

Vue.use(VueRouter);

/*配置路由*/
export default new VueRouter({
  routes:[
    {path: '/', component: Blog},
    {path: '/addBlog', component: AddBlog}
  ],
  mode: 'history'   //去掉地址里的#
})
