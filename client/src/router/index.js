import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Detail from '@/components/Detail'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/detail/:slug',
      name: 'Detail',
      props: true,
      component: Detail
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
