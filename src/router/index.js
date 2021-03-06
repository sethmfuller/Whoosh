import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Group from '@/components/Group'
import NewGroup from '@/components/NewGroup'
import ChangeGroup from '@/components/ChangeGroup'
import Alerts from '@/components/Alerts'
import NewAlert from '@/components/NewAlert'
import ManageAlert from '@/components/ManageAlert'
import AddMember from '@/components/AddMember'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/group',
      name: 'group',
      component: Group,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'new',
          component: NewGroup
        },
        {
          path: 'change',
          component: ChangeGroup
        }
      ]
    },
    {
      path: 'alerts',
      name: 'alerts',
      component: Alerts,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'new',
          component: NewAlert
        },
        {
          path: 'manage',
          component: ManageAlert
        }
      ]
    },
    {
      path: 'add-member',
      name: 'add-member',
      component: AddMember,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin === 1) {
          next()
        } else {
          next({ name: 'home' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
