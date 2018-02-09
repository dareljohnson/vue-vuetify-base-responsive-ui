import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewContent from '@/components/views/ViewContent'
import CreateContent from '@/components/views/CreateContent'
import Profile from '@/components/user_views/Profile'
import SignIn from '@/components/user_views/SignIn'
import SignUp from '@/components/user_views/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewcontent',
      name: 'ViewContent',
      component: ViewContent
    },
    {
      path: '/createcontent',
      name: 'CreateContent',
      component: CreateContent
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: 'history'
})