import Vue from 'vue'
import Router from 'vue-router'
import ProductInfo from "../components/ProductInfo";
import Home from "../components/Home";
import Cart from "../components/Cart";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/ProductInfo/:pid',
      name:'ProductInfo',
      component:ProductInfo
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
