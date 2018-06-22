import Vue from 'vue'
import VueRouter from 'vue-router'
import showBlog from '../components/content/showBlog'
import AddBlog from '../components/content/addBlog'

Vue.use(VueRouter);

/*配置路由*/
export default new VueRouter({
  routes:[
    { /*首页*/
      path: '/',
      component: showBlog,

    },
    { /*添加博客*/
      path: '/addBlog',
      component: AddBlog
    }
  ],
  mode: 'history'   //去掉地址里的#
})
