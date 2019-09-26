import Vue from 'vue'
import Router from 'vue-router'
import IndexDG from './views/Index.vue'
import Watch from './views/Watch.vue'
import WatchDetails from './views/WatchDetails.vue'
import Login from "./views/Login.vue"
import Cart from "./views/newCart.vue"
import Shoes from "./views/Shoes1.vue"
import Shoes_ss from "./views/Shoes2.vue"
import glass_index from "./views/glass.vue"
import glass_details from "./views/glass_detail.vue"
import dw_index from "./views/dwindex.vue"
import dw_details from "./views/dwdetails.vue"
 import pay from "./views/pay.vue"
import kefu from "./views/kefu.vue"

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
        {path:"/glassls",component:glass_details},
        {path:"/dwindex",component:dw_index},
        {path:"/dwdetail/:lid",component:dw_details,props:true},
         {path:"/pay",component:pay},
        {path:"/kefu",component:kefu}


    ]
})
