import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MyHeader from './components/MyHeader.vue'
//1.1 完成引入所有组件
import MintUI from "mint-ui"
//1.2 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
import "./font/iconfont.css"
//2.1引入element ui
import ElementUI from "element-ui"
//2.2引入element ui样式文件
import "element-ui/lib/theme-chalk/index.css"
import "element-ui/lib/index.js"
import 'element-ui/lib/theme-chalk/base.css'

axios.defaults.withCredentials=true;/*配置请求时保存session信息*/
axios.defaults.baseURL="http://127.0.0.1:3000/";

Vue.config.productionTip = false;
//1.3 将mint-ui 注册vue
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.prototype.axios=axios;
Vue.component("my-header",MyHeader);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
