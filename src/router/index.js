import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Menu from '../components/menu.vue'
import Admin from '../components/admin.vue'
import Rest from '../components/rest.vue'
import About from '../components/about.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Hot from '../components/about/hot.vue'
import Ems from '../components/about/ems.vue'
import Callme from '../components/about/Callme.vue'
import History from '../components/about/history.vue'
import Tel from '../components/about/us/tel.vue'
import Name from '../components/about/us/name.vue'
import Address from '../components/about/us/address.vue'
import Thisone from '../components/thisone.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components:{
        default:Home ,
        'ems':Ems
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component:Menu 
    },
    {
      path: '/rest',
      name: 'Rest',
      component:Rest 
    },
    {
      path: '/admin',
      name: 'Admin',
      component:Admin 
    },
    {
      path: '/thisone',
      name: 'Thisone',
      component:Thisone 
    },
    {
      path: '/about',
      name: 'About',
      component:About,
      redirect:'/about/hot',
      children:[
        {
          path: '/about/hot',
          name: 'Hot',
          component:Hot,
        },
        {
          path: '/about/callme',
          name: 'Callme',
          component:Callme,
          redirect:'/about/tel',
          children:[
            {
              path: '/about/name',
              name: 'Name',
              component:Name,
            },
            {
              path: '/about/tel',
              name: 'Tel',
              component:Tel,
            },
            {
              path: '/about/address',
              name: 'Address',
              component:Address,
            }
          ]
        },
        {
          path: '/about/history',
          name: 'History',
          component:History,
        },
        {
          path: '/about/ems',
          name: 'Ems',
          component:Ems,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component:Login 
    },
    {
      path: '/register',
      name: 'Register',
      component:Register 
    },
  ],
  mode:'history'
})
