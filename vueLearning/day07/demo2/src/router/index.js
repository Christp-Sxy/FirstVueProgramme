import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

/* 
  meta 对象里面可以定义一些和路径相关的参数配置，成为路由元信息
*/
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/tabbar/category', // 重定向，当用户访问 / 时，会自动跳转到/home
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tabbar.vue'),
    children: [
      {
        path: '/tabbar/category',
        component: () => import(/* webpackChunkName: "about" */ '../components/Category.vue'),
      },
      {
        path: '/tabbar/cart',
        component: () => import(/* webpackChunkName: "about" */ '../components/Cart.vue'),
      },
      {
        path: '/tabbar/user',
        component: () => import(/* webpackChunkName: "about" */ '../components/User.vue'),
      },
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      iskeepalive: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      iskeepalive: false,
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // /* webpackChunkName: "about" */ 这个时魔法注释，意思是当项目打包时生成打包文件的名字，对后期的懒加载是有帮助的
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    meta: {
      iskeepalive: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
