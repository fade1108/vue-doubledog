import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Watch from './views/Watch'


Vue.use(Router);

export default new Router({
  routes: [
      {path:"/",component:Index},
      {path:"/index",component:Index},
      {path:"/watch",component:Watch},


  ]
})
