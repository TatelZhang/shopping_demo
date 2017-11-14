import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 导入首页
import IndexPage from '../components/Pages/index'
// import test from '../components/test/testcomp1'
import test from '../components/test/test_form'
// 登录页
import Login from '../components/Pages/login'
// 注册页
import Regist from '../components/Pages/regist'
import FuncPage from '../components/Pages/func'
import GamePage from '../components/Pages/gamepage'
import NotFoundPage from '../components/Pages/404'
// cnode 首页
import cnodeIndex from '../components/Pages/cnode/index'
import topic from '../components/Pages/cnode/topic'
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/func',
      name: 'func',
      component: FuncPage
    },
    {
      path: '/',
      // name: 'func',
      component: cnodeIndex
    },
    {
      path: '/topic/:id',
      component: topic
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: "*",
      name: '404',
      component: NotFoundPage
    },
  ]
})
