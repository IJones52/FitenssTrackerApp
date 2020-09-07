import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import NewExercise from '@/components/NewExercise'
import ViewExercise from '@/components/ViewExercise'
import NewWorkout from '@/components/NewWorkout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/exercise/new',
      name: 'newExercise',
      component: NewExercise
    },
    {
      path: '/exercise',
      name: 'viewExercise',
      component: ViewExercise
    },
    {
      path: '/workout/new',
      name: 'newWorkout',
      component: NewWorkout
    }
    
  ]
})
