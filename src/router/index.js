import Vue from 'vue'
import Router from 'vue-router'
// 导入首页
import IndexPage from '../components/Pages/index'
import test from '../components/test/testcomp1'

// 登录页
import Login from '../components/Pages/login'
// 注册页
import Regist from '../components/Pages/regist'
import FuncPage from '../components/Pages/func'
import GamePage from '../components/Pages/gamepage'
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
      path: '/func',
      name: 'func',
      component: FuncPage
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
    }
  ]
})
