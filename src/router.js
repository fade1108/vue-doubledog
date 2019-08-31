import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Watch from './views/Watch.vue'
import WatchDetails from './views/WatchDetails.vue'
import Login from "./views/Login.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {path:"/",component:Index},
        {path:"/index",component:Index},
        {path:"/watch",component:Watch},
        {path:"/watchdetails/:lid",component:WatchDetails, props:true},
        {path:"/login",component:Login}


    ]
})
