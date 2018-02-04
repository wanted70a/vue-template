import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import appPosts from '../components/appPosts.vue'

Vue.use( VueRouter )

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      component:App,
      name:'home'
    },
    {
      path:'/posts',
      component:appPosts,
      name:'posts'
    }
  ]
})
