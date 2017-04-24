import Vue from 'vue'
import Router from 'vue-router'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'
import hello from '@/components/Hello'
import todolist from '@/components/Todolist'

// 安装路由功能
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },{
      path: '/hello',
      name: 'hello',
      component: hello
    },{
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})

