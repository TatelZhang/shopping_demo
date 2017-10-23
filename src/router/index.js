import Vue from 'vue'
import Router from 'vue-router'
// 导入首页
import IndexPage from '../components/Pages/index'
import test from '../components/test/testcomp1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
