import Vue from 'vue'
import Router from 'vue-router'
import IndexDG from './views/Index.vue'
import Watch from './views/Watch.vue'
import WatchDetails from './views/WatchDetails.vue'
import Login from "./views/Login.vue"
import Cart from "./views/newCart.vue"
import Shoes from "./views/shoes.vue"
import Shoes_ss from "./views/shoes_ss.vue"
import glass_index from "./views/glass.vue"
import glass_details from "./views/glass_detail.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {path:"/indexdg",component:IndexDG},
        {path:"/watch",component:Watch},
        {path:"/watchdetails/:lid",component:WatchDetails, props:true},
        {path:"/login",component:Login},
        {path:"/cart",component:Cart},
        {path:"/shoes",component:Shoes},
        {path:"/shoess",component:Shoes_ss},
        {path:"/glass",component:glass_index},
        {path:"/glassls",component:glass_details}


    ]
})
