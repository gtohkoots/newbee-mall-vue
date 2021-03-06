import { createRouter,createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Setting from '../views/Setting'
import User from '../views/User'
import Category from '../views/Category'
import ProductList from '../views/ProductList'
import ProductDetail from '../views/ProductDetail'
import Address from  '../views/Address'
import AddressEdit from '../views/AddressEdit'
import CreateOrder from '../views/CreateOrder'
import Cart from '../views/Cart'
import Order from '../views/Order'
import OrderDetail from '../views/OrderDetail'


const router = createRouter({ 
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component: Home,
      meta: {
          index: 1
      }
    },
    {
      path:'/login',
      name:'login',
      component: Login,
      meta:{
          index: 1
      }
    },
    {
      path:'/user',
      name:'user',
      component: User,
      meta: {
        index: 1
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {
        index: 2
      }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta: {
        index: 1
      }
    },
    {
      path:'/product-list',
      name:'product-list',
      component: ProductList,
      meta: {
        index: 2
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
      meta: {
        index: 3
      }
    },
    {
      path:'/address',
      name:'address',
      component: Address,
      meta: {
        index: 2
      }
    },
    {
      path:'/address-edit',
      name:'address-edit',
      component:AddressEdit,
      meta: {
        index: 3
      }
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart,
      meta: {
        index: 1
      }
    },
    {
      path:'/create-order',
      name:'create-order',
      component: CreateOrder,
      meta: {
        index: 2
      }
    },
    {
      path:'/order',
      name:'order',
      component: Order
    },
    {
      path:'/order-detail',
      name:'order-detail',
      component: OrderDetail
    }
  ]
})

export default router