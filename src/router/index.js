import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts' 
import EnlacesInteres from '@/components/EnlacesInteres'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: "/",
      component: Dashboard,
      name: 'Dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/enlaces-interes',
      name: 'Links',
      component: EnlacesInteres
    },
    {
      path: '/contactos',
      name: 'Contacts',
      component: Contacts
    }
  ]
})