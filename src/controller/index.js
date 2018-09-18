import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
	{//默认域名
	    path: '/',
	    component: Layout,
	    children: [
	    	{
	        path: '/',
	        name: 'index',
	        component: () => import('@/views/index/index')
	     }
	    ]
	},
	{//登录
        path: '/admin/login',
        name: 'login',
	    component: () => import('@/views/login/index')
	},
	{//管理端
	    path: '/admin',
	    component: Layout,
	    children: [
	    	{//首页
	        path: '/',
	        name: 'index',
	        component: () => import('@/views/index/index')
	      },
	      {//首页
	        path: 'index',
	        name: 'index',
	        component: () => import('@/views/index/index')
	      },
	      {//行为分析
	        path: 'analysis',
	        name: 'analysis',
	        component: () => import('@/views/analysis/index')
	       }

	    ]
	},






];

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

