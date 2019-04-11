import Vue from 'vue'
import Router from 'vue-router'
import detail from "./components/shop/detail.vue"
//论坛
import Forum from './views/Forum'
import Forum_list from './views/Forum_list'
import Forum_detail from './views/Forum_detail'
import Forum_class from './views/Forum_class'
//1:引入Test组件
import family from './components/shop/family.vue'
import shop_header from './components/shop/shop_header.vue'
import Shop_Mall from './components/shop/Shop_Mall.vue'
import Register from "./components/user/Register.vue"
import Login from "./components/user/Login.vue"
import Home from "./components/index/Home.vue"
import gamedetail from './components/index/gamedetail'
import Forum_add from './views/Forum_add'
Vue.use(Router)
//2:为Test组件配置访问路径
export default new Router({
  routes: [
    
    {path:'/',component:shop_header,children:[
      {path:'/',component:Home},
      {path:'/game/detail',component:gamedetail},
      {path:'/Home',component:Home},
      {path:'/shop/index',component:Shop_Mall},
      {path:'/shop/family',component:family},
      {path:'/shop/detail',component:detail},
      {path:'/forum',component:Forum},
      {path:'/forum_list',component:Forum_list},
      {path:'/forum_detail',component:Forum_detail},
      {path:'/forum_class',component:Forum_class},
      {path:'/forum_add',component:Forum_add}
    ]},
    {path:'/Login',component:Login},
    {path:'/Register',component:Register}
  ]
})