// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true,
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
  }
]
