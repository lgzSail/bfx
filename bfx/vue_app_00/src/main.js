import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
Vue.use(iView);


Vue.config.productionTip = false

import'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1:引入Header组件
import {Header} from "mint-ui"
//2:组件Header组件
Vue.component(Header.name,Header);
//3:引入axios库
import axios from "axios"
//4:配置跨域访问选项
axios.defaults.withCredentials=false
//5:将axios配置Vue实例属性
Vue.prototype.axios = axios

//7:main.js 引入第三方库 qs
//解决axios post请求问题 
import qs from "qs";
Vue.prototype.qs = qs;

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})


