import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Item from '../views/Item.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/item',
        name: 'item',
        component: Item
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(store.state);
  console.log(to);
  if (to.name == 'login' || to.name == 'register' || store.state.user) {
    return next();
  } else {
    return next('login');
  }
});
export default router
