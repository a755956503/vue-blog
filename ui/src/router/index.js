import Vue from 'vue';
import Router from 'vue-router';
import Cache from '../config/cache';
// import HelloWorld from '@/components/HelloWorld';
import Home from '../components/Home';
import User from '../components/User';
import Login from '../components/Login';

Vue.use(Router);

// const isLogin = (to, from, next) => { 
//   const isLogin = Cache.isLogin();
//   next();
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
});
